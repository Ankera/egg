module.exports = (options, app) => {
    return async function userauth(ctx, next) {
        /**
         * 判断前台用户是否登录   如果登录可以进入 （ 去结算  用户中心）    如果没有登录直接跳转到登录
         */
        let userinfo = ctx.service.cookies.get('userinfo');
        if (userinfo && userinfo.id && userinfo.phone) {
            let result = await ctx.service.user.queryDataByWhere({
                id: userinfo.id,
                phone: userinfo.phone
            });
            if (result.length > 0) {
                await next();
            } else {
                ctx.redirect('/login');
            }
        } else {
            ctx.redirect('/login');
        }
    }
}