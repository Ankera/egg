'use strict';

module.exports = {
    CONSTANT: {
        PAGE: 1, // 如果前端没有传页码，则默认为1，
        PAGESIZE: 50 // 如果前端没有传每页返回多少个，则默认为50
    },

    oss: {
        accessKeyId: 'LTAIgwIBiQzYaiCN',
        accessKeySecret: 'M504nUyN5941RfBcoMINHp1YcVB2Jw',
        bucket: 'yyy-anker',
        endpoint: 'oss-cn-hongkong.aliyun.com',
        timeout: '60s',
        secure: true
    }
}