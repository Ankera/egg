'use strict';

const Service = require('egg').Service;
const svgCaptcha = require('svg-captcha'); // 验证码作用防止恶意攻击
const MD5 = require('md5');
const sd = require("silly-datetime");

class ToolsService extends Service {

    // 把验证码封装起来，供后台管理系统和前端页面登陆注册使用
    async captcha(width = 100, height = 35) {
        let captcha = svgCaptcha.create({
            size: 4,
            fontSize: 50,
            width,
            height,
            background: '#cc9966'
        });

        this.ctx.session.verify = captcha.text; // 验证码上的数字
        return captcha;
    }

    async md5(str) {
        return MD5(str);
    }

    // 获取到年月日
    async getDay() {
        let day = sd.format(new Date(), 'YYYYMMDD');
        return day;
    }

    async getRandomNum() {
        let random_str = '';
        for (var i = 0; i < 4; i++) {
            random_str += Math.floor(Math.random() * 10);
        }
        return random_str;
    }
}

module.exports = ToolsService;
