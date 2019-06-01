const url = require('url');

module.exports = options => {
    return async function adminauth(ctx, next) {
        /**
         * 用户没有登录则跳转到登录页面
         * 只有 ‘/admin’ 登录以后才可以进行操作管理系统
         */

        // 定义全局 csrf 变量
        ctx.state.csrf = ctx.csrf;

        let pathname = ctx.request.url;
        pathname = url.parse(pathname).pathname;

        // 不需要登录的页面，
        let noLoginPath = ['/admin/login', '/admin/verify', '/admin/doLogin', '/admin/loginOut', '/admin/auth', '/admin'];

        let noLoginboolean = noLoginPath.some(el => {
            if (el == pathname) {
                return true;
            }
        });

        if (ctx.session.userinfo) {
            ctx.state.userinfo = ctx.session.userinfo; // 个人信息全局存储
            let hasAuth = await ctx.service.auth.checkedAuth();
            if (hasAuth) {
                // 有权限访问, 获取权限列表
                let { role_id } = ctx.session.userinfo;
                ctx.state.asideList = await ctx.service.auth.getAuthList(role_id);
                await next();
            } else {
                ctx.redirect('/admin/auth');
            }
        } else {
            ctx.state.userinfo = null; // 表示未登录
            if (noLoginboolean) {
                await next();
            } else {
                ctx.redirect('/admin/login');
            }
        }
    }
}