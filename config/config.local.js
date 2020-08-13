'use strict';

module.exports = {
    CONSTANT: {
        PAGE: 1, // 如果前端没有传页码，则默认为1，
        PAGESIZE: 50, // 如果前端没有传每页返回多少个，则默认为50
        IP_LIMIT_TIMES: 500, // 同一个 ip 地址 同一天 短信 发送次数
        PHONE_LIMIT_TIMES: 50 // 同一个手机号 一天限制发送短信到次数
    },

    oss: {
        accessKeyId: 'xxxxxxxxxx',
        accessKeySecret: 'xxxxxxxxxxxxxxx',
        bucket: 'egg-anker',
        endpoint: 'oss-cn-hangzhou.aliyuncs.com',
        timeout: '60s',
        secure: true
    },

    multipart: {
        fields: '50'
    }
}
