'use strict';

const Service = require('egg').Service;

class CookiesService extends Service {
    set(key, value, expires) {
        expires = expires ? expires : 24 * 3600 * 1000;
        this.ctx.cookies.set(key, JSON.stringify(value), {
            maxAge: expires,   //过期时间
            httpOnly: true,   //只有nodejs可以操作cookie
            encrypt: true     // 对cookies加密     
        });
    }

    get(key) {
        var data = this.ctx.cookies.get(key, {    //获取的时候注意  加密cookies的获取
            encrypt: true
        });
        if (data) {
            return JSON.parse(data);

        }
        return null;
    }
}

module.exports = CookiesService;
