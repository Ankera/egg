'use strict';

const Controller = require('egg').Controller;

class BaseController extends Controller {
    async success(redirectUrl) {

        await this.ctx.render('admin/public/success',{
            redirectUrl
        });
    }

    async error(redirectUrl) {

        await this.ctx.render('admin/public/error',{
            redirectUrl
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
