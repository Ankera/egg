'use strict';

const BaseController = require('./base.js');

class GoodsController extends BaseController {
    async index() {
        let ctx = this.ctx,
            result = [],
            { page, pageSize } = ctx.query;
        let total = await ctx.service.goods.getTotal();
        if (total > 0) {
            result = await ctx.service.goods.getAllList(page, pageSize);
        }
        await this.ctx.render('admin/goods/index', {
            list: result,
            total,
            page,
            pageSize
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
            is_news,
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
            is_news,
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
        goodsResult[0].goods_color = goodsResult[0].goods_color && JSON.parse(goodsResult[0].goods_color) || [];

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
        let goodsColorResult = await ctx.service.goods.queryGoodsColorById(id);

        await ctx.render('admin/goods/edit.html', {
            colorResult: colorResult,
            goodsType: goodsType,
            goodsCate: result,
            goods: goodsResult[0],
            goodsAttr: goodsAttrsStr,
            goodsImage: goodsImageResult,
            goodsColor: goodsColorResult
        });
    }

    async doEdit() {
        let ctx = this.ctx;
        let {
            id,
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
            is_news,
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

        let updateResult = await ctx.service.goods.update({
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
            is_news,
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
        }, id);
        try {
            if (updateResult.affectedRows < 0) {
                await this.error('/admin/focus', '轮播图修改失败~~~');
            } else {
                if (goods_image_list && goods_image_list.length > 0) {
                    for (let i = 0; i < goods_image_list.length; i++) {
                        let imageResult = await ctx.service.goodsImage.insert({
                            goods_id: id,
                            img_url: goods_image_list[i]
                        })
                        if (imageResult.insertId < 0) {
                            ctx.logger.info("商品相册图库插入失败:" + goodsResult);
                        }
                    }
                }

                await ctx.service.goodsAttr.deleteByGoodsId(id);
                // 插入商品属性
                if (attr_id_list && attr_value_list) {
                    for (let i = 0; i < attr_id_list.length; i++) {
                        let goodsTypeAttrResult = await ctx.service.goodsTypeAttribute.getSingleDataById(attr_id_list[i]);
                        let elt = goodsTypeAttrResult[0];
                        let attrResult = await ctx.service.goodsAttr.insert({
                            goods_id: id,
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
            }

            await this.success('/admin/goods', '编辑增加成功');
        } catch (error) {
            ctx.logger.info("编辑商品" + error);
            await this.error('/admin/goods', '商品增加失败');
        }
    }

    async delete() {
        let ctx = this.ctx,
            id = ctx.query.id;
        let result = await ctx.service.goods.update({
            is_delete: 0
        }, id);
        if (result.affectedRows < 0) {
            ctx.body = { success: "商品删除失败", status: false }
        } else {
            await this.success('/admin/goods', '商品删除成功');
        }
    }

    // 修改商品对应的颜色
    async changeGoodsImageColor() {
        let ctx = this.ctx,
            { color_id, goods_image_id } = ctx.request.body;
        let result = await ctx.service.goodsImage.update({
            color_id
        }, goods_image_id);
        if (result.affectedRows < 0) {
            ctx.body = { success: "颜色修改失败", status: false }
        } else {
            ctx.body = { success: "颜色修改成功", status: true }
        }
    }

    // 删除对应商品
    async goodsImageRemove() {
        let ctx = this.ctx,
            { goods_image_id } = ctx.query;
        let result = await ctx.service.goodsImage.update({
            is_delete: 0
        }, goods_image_id);
        if (result.affectedRows < 0) {
            ctx.body = { success: "商品相册删除失败", status: false }
        } else {
            ctx.body = { success: "商品相册删除成功", status: true }
        }
    }

    // 商品专有修改1价格，2点击量，3状态，4精品，5新品，6热销，7排序，8库存方法
    async editGoodsCommon() {
        let ctx = this.ctx,
            { type, id, number, status } = ctx.query,
            _obj = {},
            _name = "";
        switch (Number(type)) {
            case 1:
                _obj = { shop_price: number };
                _name = '价格'
                break;
            case 2:
                _obj = { click_count: number };
                _name = '点击量'
                break;
            case 3:
                _obj = {
                    status: status == 1 ? 0 : 1
                };
                _name = '状态'
                break;
            case 4:
                _obj = {
                    is_best: status == 1 ? 0 : 1
                };
                _name = '精品'
                break;
            case 5:
                _obj = {
                    is_news: status == 1 ? 0 : 1
                };
                _name = '新品'
                break;
            case 6:
                _obj = {
                    is_hot: status == 1 ? 0 : 1
                };
                _name = '热销'
                break;
            case 7:
                _obj = { sort: number };
                _name = '排序'
                break;
            case 8:
                _obj = { goods_number: number };
                _name = '库存数量'
                break;
        }
        let result = await ctx.service.goods.update(_obj, id);

        if (result.affectedRows < 0) {
            ctx.body = { success: `${_name}修改失败`, status: false }
        } else {
            ctx.body = { success: `${_name}修改成功`, status: true }
        }
    }
}

module.exports = GoodsController;
