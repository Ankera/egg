'use strict';

const Controller = require('egg').Controller;

class IndexController extends Controller {
    async index() {
        let ctx = this.ctx,
            topNav = await ctx.service.nav.queryDataByPosition(1),
            focus = await ctx.service.focus.queryDataByType(1),
            result = await ctx.service.goodsCate.getSingleDataByPid(0);
        for (let i = 0; i < result.length; i++) {
            let itemResults = await ctx.service.goodsCate.getSingleDataByPid(result[i].id);
            result[i].items = itemResults;
        }
        // 中间导航
        let middleNav = await ctx.service.nav.queryDataByPosition(2);
        for (let i = 0; i < middleNav.length; i++) {
            let elt = middleNav[i];
            if (elt.relation) {
                try {
                    let subResult = await ctx.service.goods.queryDataByBatchId(elt.relation);
                    elt.subGoods = subResult;
                } catch (error) {
                    ctx.logger.info(error);
                    elt.subGoods = [];
                }
            } else {
                elt.subGoods = [];
            }
        }
        await this.ctx.render('default/index', {
            topNav,
            focus,
            goodsCate: result,
            middleNav
        });
    }
}

module.exports = IndexController;
