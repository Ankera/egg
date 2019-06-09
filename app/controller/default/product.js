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


        await this.ctx.render('default/product_info.html');

    }
}

module.exports = ProductController;
