'use strict';

const Service = require('egg').Service;

class CommonService extends Service {
    async returnPage(page) {
        let reg = /^[0-9]*$/g;
        if (!page || !reg.test(page)) {
            return this.config.CONSTANT.PAGE;
        } else {
            return Number(page);
        }
    }

    async returnPageSize(pageSize) {
        let reg = /^[0-9]*$/g;
        if (!pageSize || !reg.test(pageSize)) {
            return this.config.CONSTANT.PAGESIZE;
        } else {
            return Number(pageSize);
        }
    }
}

module.exports = CommonService;
