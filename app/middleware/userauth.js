const url = require('url');
module.exports = (options, app) => {
    return async function userauth(ctx, next) {
        /**
         * 判断前台用户是否登录   如果登录可以进入 （ 去结算  用户中心）    如果没有登录直接跳转到登录
         */
        let userinfo = ctx.service.cookies.get('userinfo');
         //用户左侧菜单的选中
        ctx.state.url=url.parse(ctx.request.url).pathname;
        let prevPage = ctx.request.headers.referer || '/';   //上一个页面的地址
        if (userinfo && userinfo.id && userinfo.phone) {
            let result = await ctx.service.user.queryDataByWhere({
                id: userinfo.id,
                phone: userinfo.phone
            });
            if (result.length > 0) {
                await next();
            } else {
                ctx.redirect('/login?returnUrl=' + encodeURIComponent(prevPage));
            }
        } else {
            ctx.redirect('/login?returnUrl=' + encodeURIComponent(prevPage));
        }
    }
}