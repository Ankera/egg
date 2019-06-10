'use strict';

const Controller = require('egg').Controller;

class PassController extends Controller {
    async login() {
        await this.ctx.render('default/pass/login.html');
    }

    //注册第一步 输入手机号
    async registerStep1() {
        await this.ctx.render('default/pass/register_step1.html');
    }

    //注册第二步  验证码验证码是否正确
    async registerStep2() {
        await this.ctx.render('default/pass/register_step2.html');
    }

    //注册第三步  输入密码
    async registerStep3() {
        await this.ctx.render('default/pass/register_step3.html');
    }

    //完成注册  post
    async doRegister() {
        this.ctx.body = '完成注册';
    }

    async sendCode() {
        let ctx = this.ctx,
            reg = /^1\d{10}$/,
            json = {},
            { phone, identify_code } = ctx.query;
        if (identify_code.toLocaleLowerCase() != ctx.session.identify_code.toLocaleLowerCase()) {
            ctx.body = {
                success: false,
                msg: '输入的图形验证码不正确'
            }
            return;
        }
        if (!reg.test(phone)) {
            ctx.body = {
                success: false,
                msg: '手机号不合法'
            }
            return;
        }

        try {
            let ct = this.config.CONSTANT,
                add_day = await ctx.service.tools.getDay(),
                send_count = 1,
                sign = await ctx.service.tools.md5(`${phone}${add_day}`),
                ip = ctx.request.ip.replace(/::ffff:/, ''),
                phone_code = await ctx.service.tools.getRandomNum();

            let userTempIpResult = await ctx.service.userTemp.queryTotalByIpAndday(ip, add_day);

            if (userTempIpResult >= ct.IP_LIMIT_TIMES) {
                ctx.body = {
                    success: false,
                    msg: '本设备发送短信次数已达上线，请24小时以后再操作'
                }
                return false;
            }
console.log(userTempIpResult)
console.log('hello world ... laoyu');
            let a11 = await ctx.service.sendMsg.send('15189120919', '12121');
           
            console.log(a11);
            let userTempResult = await ctx.service.userTemp.queryDataByWhere({ sign, add_day });
            if (userTempResult.length > 0) {
                if (userTempResult[0].send_count < ct.PHONE_LIMIT_TIMES) {
                    send_count = Number(userTempResult[0].send_count) + 1;
                    let updateResult = await ctx.service.userTemp.update({
                        send_count
                    }, userTempResult[0].id);
                    if (updateResult && updateResult.affectedRows > 0) {
                        ctx.session.phone_code = phone_code;
                        json = {
                            success: true,
                            msg: '短信发送成功',
                            sign: sign
                        }
                    } else {
                        json = {
                            success: false,
                            msg: '短信发送失败'
                        }
                    }
                } else {
                    json = {
                        success: true,
                        msg: '当前手机号码发送次数达到上限，明天重试',
                    }
                }
            } else {
                let insertResult = await ctx.service.userTemp.insert({
                    phone,
                    add_day,
                    sign,
                    ip,
                    send_count: 1
                });
        
                ctx.session.phone_code = phone_code;
                if (insertResult.insertId > 0) {
                    json = {
                        success: true,
                        msg: '短信发送成功',
                        sign: sign
                    }
                } else {
                    json = {
                        success: false,
                        msg: '短信发送失败',
                    }
                }
            }
        } catch (error) {
            ctx.logger.info("验证码" + error);
        }

        ctx.body = json;
    }
}

module.exports = PassController;
