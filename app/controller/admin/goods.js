'use strict';

const BaseController = require('./base.js');

class GoodsController extends BaseController {
    async index() {
        let result = await this.ctx.service.goods.getAllList();
        await this.ctx.render('admin/goods/index', {
            list: result
        });
    }

    async add() {
        let colorResult = await this.ctx.service.goodsColor.getAllList();
        let goodsType = await this.ctx.service.goodsType.getAllList();
        let result = await this.ctx.service.goodsCate.getSingleDataByPid(0);
        for (let i = 0; i < result.length; i++) {
            let itemResults = await this.ctx.service.goodsCate.getSingleDataByPid(result[i].id);
            result[i].items = itemResults;
        }
        await this.ctx.render('admin/goods/add', {
            colorResult: colorResult,
            goodsType: goodsType,
            goodsCate: result
        });
    }

    async doAdd() {
        let ctx = this.ctx;
        let {
            title,
            sub_title,
            goods_version,
            cate_id,
            goods_img,
            shop_price,
            market_price,
            status,
            is_best,
            is_hot,
            is_new,
            goods_content,
            goods_keywords,
            goods_desc,
            sort,
            goods_color,
            goods_type_id,
            relation_goods,
            goods_gift,
            goods_fitting,
            goods_attr,
            attr_id_list,
            attr_value_list,
            goods_image_list
        } = ctx.request.body;
        console.log(ctx.request.body);
        let goodsResult = await ctx.service.goods.insert({
            title,
            sub_title,
            cate_id,
            goods_version,
            goods_img,
            shop_price,
            market_price,
            status,
            is_best,
            is_hot,
            is_new,
            sort,
            goods_content,
            goods_color: JSON.stringify(goods_color),
            relation_goods,
            goods_gift,
            goods_fitting,
            goods_attr,
            goods_keywords,
            goods_desc,
            goods_type_id
        });
        if (goodsResult.insertId > 0) {
            let goods_id = goodsResult.insertId;
            // 插入商品图库
            if (goods_image_list && goods_image_list.length > 0) {
                for (let i = 0; i < goods_image_list.length; i++) {
                    let imageResult = await ctx.service.goodsImage.insert({
                        goods_id,
                        img_url: goods_image_list[i]
                    })
                    if (imageResult.insertId < 0) {
                        ctx.logger.info("商品相册图库插入失败:" + goodsResult);
                    }
                }
            }
            // 插入商品属性
            if (attr_id_list && attr_value_list) {
                for (let i = 0; i < attr_id_list.length; i++) {
                    let goodsTypeAttrResult = await ctx.service.goodsTypeAttribute.getSingleDataById(attr_id_list[i]);
                    let elt = goodsTypeAttrResult[0];
                    let attrResult = await ctx.service.goodsAttr.insert({
                        goods_id,
                        cate_id,
                        attribute_id: attr_id_list[i],
                        attribute_value: attr_value_list[i],
                        attribute_type: elt.attr_type,
                        attribute_title: elt.title
                    });
                    if (attrResult.insertId < 0) {
                        ctx.logger.info("商品属性插入失败:" + goodsResult);
                    }
                }
            }
        } else {
            ctx.logger.info("goods插入失败:" + goodsResult);
        }

        await this.success('/admin/goods', '商品增加成功');
    }

    async goodsTypeAttribute() {
        let ctx = this.ctx;
        let { cate_id } = ctx.query;
        let result = await ctx.service.goodsTypeAttribute.getSingleDataByCateId(cate_id);
        this.ctx.body = {
            result
        }
    }

    async edit() {
        let ctx = this.ctx;
        let { id } = ctx.query;
        let colorResult = await this.ctx.service.goodsColor.getAllList();
        let goodsType = await this.ctx.service.goodsType.getAllList();
        let result = await this.ctx.service.goodsCate.getSingleDataByPid(0);
        let goodsResult = await ctx.service.goods.getSingleDataById(id);
        goodsResult[0].goods_color = JSON.parse(goodsResult[0].goods_color);

        for (let i = 0; i < result.length; i++) {
            let itemResults = await this.ctx.service.goodsCate.getSingleDataByPid(result[i].id);
            result[i].items = itemResults;
        }

        let goodsImageResult = await ctx.service.goodsImage.getSingleDataByGoodsId(id);
        let goodsAttsResult = await ctx.service.goodsAttr.getSingleDataByGoodsId(id);
        let goodsAttrsStr = '';

        for (let i = 0; i < goodsAttsResult.length; i++) {
            let val = goodsAttsResult[i];
            // goodsAttsResult.forEach(async (val) => {
            if (val.attribute_type == 1) {
                goodsAttrsStr += `<li><span>${val.attribute_title}: 　</span><input type="hidden" name="attr_id_list" value="${val.attribute_id}" />  <input type="text" name="attr_value_list"  value="${val.attribute_value}" /></li>`;
            } else if (val.attribute_type == 2) {
                goodsAttrsStr += `<li><span>${val.attribute_title}: 　</span><input type="hidden" name="attr_id_list" value="${val.attribute_id}" />  <textarea cols="50" rows="3" name="attr_value_list">${val.attribute_value}</textarea></li>`;
            } else {
                //获取 attr_value  获取可选值列表 
                let goodsTypeAttributeResult = await ctx.service.goodsTypeAttribute.getSingleDataById(val.attribute_id)

                let arr = goodsTypeAttributeResult[0].attr_value.split('\r\n');

                goodsAttrsStr += `<li><span>${val.attribute_title}: 　</span><input type="hidden" name="attr_id_list" value="${val.attribute_id}" />`;
                goodsAttrsStr += `<select name="attr_value_list">`;

                for (let j = 0; j < arr.length; j++) {
                    if (arr[j] == val.attribute_value.replace('\r\n', '')) {
                        goodsAttrsStr += `<option value="${arr[j]}" selected >${arr[j]}</option>`;
                    } else {
                        goodsAttrsStr += `<option value="${arr[j]}" >${arr[j]}</option>`;
                    }
                }
                goodsAttrsStr += `</select>`;
                goodsAttrsStr += `</li>`;
            }
            // })
        }

        await ctx.render('admin/goods/edit.html', {
            colorResult: colorResult,
            goodsType: goodsType,
            goodsCate: result,
            goods: goodsResult[0],
            goodsAttr: goodsAttrsStr,
            goodsImage: goodsImageResult
        });
    }

    async doEdit() {

    }

    async delete() {
        let ctx = this.ctx,
            id = ctx.query.id;
        let _path = ctx.request.header['referer'];
        let result = await ctx.service.goodsCate.delete(id);
        this.ctx.redirect(_path);
    }
}

module.exports = GoodsController;
