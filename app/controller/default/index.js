'use strict';

const Controller = require('egg').Controller;

class IndexController extends Controller {
    async index() {
        let ctx = this.ctx;
        let focus = await this.ctx.service.cache.get('index_focus');
        if (!focus) {
            focus = await ctx.service.focus.queryDataByType(1);
            await this.ctx.service.cache.set('index_focus', focus);
        }

        let shoujiResult = await this.ctx.service.cache.get('index_shoujiResult');
        if(!shoujiResult){
            shoujiResult = await ctx.service.goods.queryRelationGoodsCateId(1, {
                is_best: 1,
                is_news: 1,
                is_hot: 1
            }, 8);
            await this.ctx.service.cache.set('index_shoujiResult', shoujiResult);
        }
  
        await this.ctx.render('default/index.html', {
            focus,
            shoujiResult
        });
    }
}

module.exports = IndexController;
