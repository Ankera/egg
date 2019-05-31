'use strict';

const Controller = require('egg').Controller;

class BaseController extends Controller {

    async auth(){
        await this.ctx.render('admin/public/auth');
    }

    async success(redirectUrl, message = "操作成功!") {

        await this.ctx.render('admin/public/success',{
            redirectUrl,
            message
        });
    }

    async error(redirectUrl, message = "操作失败!") {

        await this.ctx.render('admin/public/error',{
            redirectUrl,
            message
        });
    }

    async verify(){
        let ctx = this.ctx;
        let captcha = await ctx.service.tools.captcha();

        ctx.response.type = 'image/svg+xml';
        ctx.body = captcha.data;
    }
}

module.exports = BaseController;
