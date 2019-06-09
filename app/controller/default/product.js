'use strict';

const Controller = require('egg').Controller;

class ProductController extends Controller {
    // 商品分类
    async list() {
        let ctx = this.ctx,
            goodsList = [],
            { cid } = ctx.query;
        let currentCate = await this.ctx.service.goodsCate.getSingleDataById(cid);
        if (currentCate[0].pid != 0) {
            goodsList = await ctx.service.goods.queryDataByCateID(currentCate[0].pid);
        } else { // 顶级分类 pid 是0, 获取顶级分类所有商品
            goodsList = await ctx.service.goods.queryRelationGoodsCateId(cid, null, 100);
        }

        // 如果分类中定义模板路径，则使用自定义模板
        let tplUrl = currentCate[0].template ? currentCate[0].template : 'default/product_list.html';
        await this.ctx.render(tplUrl, {
            currentTitle: currentCate[0].title,
            goodsList
        });
    }


    async info() {
        let ctx = this.ctx,
            productInfo = [],
            relationGoods = [],
            goodsColor = [],
            goodsGift = [],
            goodsFitting = [],
            goodsImageResult = [],
            goodsAttr = [],
            { id } = ctx.query;

        try {
            productInfo = await ctx.service.goods.getSingleDataById(id);
            if (productInfo.length > 0) {
                let elt = productInfo[0];
                if (elt.relation_goods) {
                    relationGoods = await ctx.service.goods.queryDataByBatchId(`${elt.relation_goods},${id}`);
                }
                goodsImageResult = await ctx.service.goodsImage.getSingleDataByGoodsId(id, "", 5);
                if (elt.goods_color) {
                    let _batch = JSON.parse(elt.goods_color);
                    goodsColor = await ctx.service.goodsColor.queryDataByBatchId(_batch.join(","));
                }
                goodsAttr = await ctx.service.goodsAttr.getSingleDataByGoodsId(id);
            }
        } catch (error) {
            ctx.logger.info("查询错误" + error);
        }

        await this.ctx.render('default/product_info.html', {
            productInfo: productInfo[0],
            relationGoods,
            goodsColor,
            goodsGift,
            goodsFitting,
            goodsImageResult,
            goodsAttr
        });

    }

    // 商品详情轮播图
    async getImagelist() {
        let ctx = this.ctx,
            json = {},
            { goods_id, color_id } = ctx.query;
        if(!goods_id || !color_id){
            ctx.body = {success: false, message: "参数不合法"};
            return;
        }
        try {
            let goodsImageResult = await ctx.service.goodsImage.getSingleDataByGoodsId(goods_id, color_id, 5);
            if (goodsImageResult.length > 0) {
                json = {success: true, result: goodsImageResult, message: "图片列表查询成功"}
            } else {
                json = {success: false, result: [], message: "查询为空"}
            }
        } catch (error) {
            ctx.logger.info("查询错误" + error);
        }
        ctx.body = json;
    }
}

module.exports = ProductController;
