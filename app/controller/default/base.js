'use strict';

const Controller = require('egg').Controller;

class BaseController extends Controller {
    async verify() {
        let ctx = this.ctx,
            captcha = await this.service.tools.captcha(120, 50);  //服务里面的方法
        ctx.session.identify_code = captcha.text;   /*验证码的信息*/
        ctx.response.type = 'image/svg+xml';   /*指定返回的类型*/
        ctx.body = captcha.data;
    }
}

module.exports = BaseController;
