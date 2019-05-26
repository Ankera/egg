'use strict';

const BaseController = require('./base.js');

class LoginController extends BaseController {
    async index() {
        await this.ctx.render('admin/login');
    }

    // 执行登录的方法
    async doLogin() {
        /**
         * 获取表单提交的数据
         * 判断验证码是否正确
         * 验证码正确:
         *  1. 对表单的密码进行MD5加密
         *  2. 查询用户是否存在
         *  3. 如果用户存在，则进行登录， 否则，提示该用户不存在
         */

        let ctx = this.ctx,
            { username, password, verify } = this.ctx.request.body;
        if (verify.toLocaleLowerCase() != ctx.session.verify.toLocaleLowerCase()) {
            await this.error('/admin/login', '验证码错误');
            return;
        };

        password = await ctx.service.tools.md5(password);

        let existenceResult = await ctx.service.admin.adminInformation(username, password);

        if (existenceResult.length > 0) {
            // 保存用户信息
            ctx.session.userinfo = existenceResult[0];
            // 跳转到用户中心
            this.ctx.redirect('/admin/manager');
        } else {
            await this.error('/admin/login', '账号密码不正确');
        }
    }

    async loginOut(){
        this.ctx.session.userinfo = null;
        this.ctx.redirect('/admin/login');
    }
}

module.exports = LoginController;
