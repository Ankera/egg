'use strict';

const Service = require('egg').Service;
const svgCaptcha = require('svg-captcha'); // 验证码作用防止恶意攻击
const MD5 = require('md5');

class ToolsService extends Service {

    // 把验证码封装起来，供后台管理系统和前端页面登陆注册使用
    async captcha() {
        let captcha = svgCaptcha.create({
            size: 4,
            fontSize: 50,
            width: 100,
            height: 35,
            background: '#cc9966'
        });

        this.ctx.session.verify = captcha.text; // 验证码上的数字
        return captcha;
    }

    async md5(str){
        return MD5(str);
    }
}

module.exports = ToolsService;
