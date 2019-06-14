'use strict';

const Controller = require('egg').Controller;

class PassController extends Controller {
    async login() {
        let { returnUrl } = this.ctx.query;
        await this.ctx.render('default/pass/login.html',{
            returnUrl: decodeURIComponent(returnUrl) || '/'
        });
    }

    async doLogin() {
        let ctx = this.ctx,
            { username, password, identify_code } = ctx.request.body;

        if (identify_code.toLocaleLowerCase() != ctx.session.identify_code.toLocaleLowerCase()) {
            ctx.body = {
                success: false,
                msg: '输入的图形验证码不正确'
            }
            return;
        } else {
            password = await this.service.tools.md5(password);
            let result = await ctx.service.user.queryDataByWhere({
                username,
                password
            });
            if (result.length > 0) {
                this.service.cookies.set('userinfo', result[0]);
                ctx.body = {
                    success: true,
                    msg: '登录成功'
                }
            } else {
                this.ctx.body = {
                    success: false,
                    msg: '用户名或者密码错误'
                }
            }
        }
    }

    //退出登录
    async loginOut() {
        this.service.cookies.set('userinfo', '');
        this.ctx.redirect('/');
    }

    //注册第一步 输入手机号
    async registerStep1() {
        await this.ctx.render('default/pass/register_step1.html');
    }

    //注册第二步  验证码验证码是否正确
    async registerStep2() {
        let ctx = this.ctx,
            { sign, identify_code } = ctx.query,
            add_day = await ctx.service.tools.getDay();
        let result = await ctx.service.userTemp.queryDataByWhere({ sign, add_day });
        if (result.length > 0) {
            await this.ctx.render('default/pass/register_step2.html', {
                sign,
                phone: result[0].phone,
                identify_code
            });
        } else {
            await this.ctx.render('default/pass/register_step1.html');
        }
    }

    //注册第三步  输入密码
    async registerStep3() {
        let ctx = this.ctx,
            { sign, phone_code, msg } = ctx.query,
            add_day = await ctx.service.tools.getDay();
        let userTempResult = await ctx.service.userTemp.queryDataByWhere({ sign, add_day });
        if (userTempResult.length == 0) {
            await ctx.redirect('/register/registerStep1');
        }
        await this.ctx.render('default/pass/register_step3.html', {
            sign,
            phone_code,
            msg
        });
    }

    //完成注册  post
    async doRegister() {
        let ctx = this.ctx,
            json = {},
            { sign, phone_code, password, rpassword } = ctx.request.body,
            add_day = await ctx.service.tools.getDay(),
            ip = ctx.request.ip.replace(/::ffff:/, '');
        try {
            let userTempResult = await ctx.service.userTemp.queryDataByWhere({ sign, add_day });
            if (userTempResult.length == 0) {
                await this.ctx.render('default/pass/register_step1.html');
            }
            if (password.length < 6 || password != rpassword) {
                ctx.redirect('/register/registerStep3?sign=' + sign + '&phone_code=' + phone_code + '&msg=' + msg);
            } else {
                let _password = await this.service.tools.md5(password);
                let insertResult = await ctx.service.user.insert({
                    phone: Number(userTempResult[0].phone),
                    last_ip: ip,
                    password: _password
                })
                if (insertResult && insertResult.insertId > 0) {
                    json = {
                        success: true,
                        msg: '注册成功'
                    };
                    let _result = await ctx.service.user.queryDataById(insertResult.insertId);
                    ctx.service.cookies.set('userinfo', _result[0]);
                    // 个人信息保存到cookies     
                    ctx.redirect('/login');
                } else {
                    await this.ctx.render('default/pass/register_step1.html');
                }
            }
        } catch (error) {
            ctx.logger.info("两次密码:" + error);
        }

        ctx.body = json;
    }

    /**
     * 发送验证码
     * 云片验证码清单 https://www.yunpian.com/doc/zh_CN/returnValue/common.html
     */
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
                sign = await ctx.service.tools.md5(`${phone}${add_day}`), // 手机号+时间端一天之内都是唯一的
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

            let userTempResult = await ctx.service.userTemp.queryDataByWhere({ sign, add_day });
            if (userTempResult.length > 0) {
                if (userTempResult[0].send_count < ct.PHONE_LIMIT_TIMES) {
                    // 同一个手机号码发送未达到上限 继续发送
                    // let codeResult = await ctx.service.sendMsg.send(phone, phone_code);
                    // if (codeResult.code == 22) {
                    //     ctx.body = {
                    //         success: false,
                    //         msg: '验证码类短信1小时内同一手机号发送次数不能超过3次'
                    //     }
                    //     return;
                    // }
                    console.log('again again ');
                    console.log(phone_code);
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
                console.log('首次发送验证码...');
                console.log(phone_code);
                // let codeResult = await ctx.service.sendMsg.send(phone, phone_code);
                // if (codeResult.code == 22) {
                //     ctx.body = {
                //         success: false,
                //         msg: '验证码类短信1小时内同一手机号发送次数不能超过3次'
                //     }
                //     return;
                // }
                let insertResult = await ctx.service.userTemp.insert({
                    phone: Number(phone),
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

    async validatePhoneCode() {
        let ctx = this.ctx,
            json = {},
            add_day = await this.service.tools.getDay(),
            { sign, phone_code } = ctx.query;

        try {
            if (ctx.session.phone_code != phone_code) {
                ctx.body = {
                    success: false,
                    msg: "你输入的手机验证码不正确"
                }
                return;
            }

            let nowTime = await this.service.tools.getTime();
            let userTempResult = await ctx.service.userTemp.queryDataByWhere({ sign, add_day });
            let _time = userTempResult[0].update_time.getTime();
            // 超过30分钟，请重新发送验证码
            if ((Number(nowTime) - Number(_time)) / 1000 / 60 > 30) {
                ctx.body = {
                    success: false,
                    msg: "验证码已过期，请重新发送"
                }
                return;
            }
            // 查询当前手机号是否注册过
            let phoneResult = await ctx.service.user.queryDataByPhone(userTempResult[0].phone);
            if (phoneResult.length == 0) {
                json = {
                    success: true,
                    msg: "验证码输入正确",
                    sign
                }
            } else {
                json = {
                    success: false,
                    msg: "该用户已经注册过"
                }
            }
        } catch (error) {
            ctx.logger.info("手机验证码错误" + error);
        }

        ctx.body = json;
    }
}

module.exports = PassController;
