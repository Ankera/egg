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
        let noLoginPath = ['/admin/login', '/admin/verify', '/admin/doLogin'];

        let noLoginboolean = noLoginPath.some(el => {
            if (el == pathname) {
                return true;
            }
        });

        if (ctx.session.userinfo) { 
            ctx.state.userinfo = ctx.session.userinfo; // 个人信息全局存储
            await next();
        } else {  
            if (noLoginboolean) {
                await next();
            } else {
                ctx.redirect('/admin/login');
            } 
        }
    }
}