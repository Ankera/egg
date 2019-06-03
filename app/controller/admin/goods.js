'use strict';

const BaseController = require('./base.js');

class GoodsController extends BaseController {
    async index() {
        await this.ctx.render('admin/goods/index');
    }

    async add(){
        let colorResult = await this.ctx.service.goodsColor.getAllList();
        let goodsType= await this.ctx.service.goodsType.getAllList();
        let result = await this.ctx.service.goodsCate.getSingleDataByPid(0);
        for (let i = 0; i < result.length; i++) {
            let itemResults = await this.ctx.service.goodsCate.getSingleDataByPid(result[i].id);
            result[i].items = itemResults;
        }
        await this.ctx.render('admin/goods/add',{
            colorResult: colorResult,
            goodsType: goodsType,
            goodsCate:result
        });
    }

    async doAdd(){
        let ctx = this.ctx;
        console.log('hello world');
        console.log(ctx.request.body);
        this.ctx.body = 'hello ...';
    }

    async goodsTypeAttribute(){
        let ctx = this.ctx;
        let { cate_id } = ctx.query;
        let result = await ctx.service.goodsTypeAttribute.getSingleDataByCateId(cate_id);
        this.ctx.body={
            result
        }
    }
}

module.exports = GoodsController;
