module.exports = (options, app) => {
    return async function init(ctx, next) {

        ctx.state.csrf=ctx.csrf;   //全局变量
        
        let topNav = await ctx.service.cache.get('index_top_nav');
        if (!topNav) {
            topNav = await ctx.service.nav.queryDataByPosition(1);
            await ctx.service.cache.set('index_top_nav', topNav);
        }

        let middleNav = await ctx.service.cache.get('index_middle_nav');
        if (!middleNav) {
            middleNav = await ctx.service.nav.queryDataByPosition(2);
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
            await ctx.service.cache.set('index_middle_nav', middleNav);
        }

        let goodsCate = await ctx.service.cache.get('index_goodsCate');
        if (!goodsCate) {
            goodsCate = await ctx.service.goodsCate.getSingleDataByPid(0);
            for (let i = 0; i < goodsCate.length; i++) {
                let itemGoodsCate = await ctx.service.goodsCate.getSingleDataByPid(goodsCate[i].id);
                goodsCate[i].items = itemGoodsCate;
            }
            await ctx.service.cache.set('index_goodsCate', goodsCate);
        }

        ctx.state.topNav = topNav;
        ctx.state.goodsCate = goodsCate;
        ctx.state.middleNav = middleNav;
        await next();
    }
}