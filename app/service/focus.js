'use strict';

const Service = require('egg').Service;
const TABLENAME = require('./tableName');

class FocusService extends Service {
    async insert(data) {
        let result = await this.app.mysql.insert(TABLENAME.FOCUS, data);
        return result;
    }

    async update(data, id) {
        let result = await this.app.mysql.update(TABLENAME.FOCUS, data, {
            where: {
                id
            }
        });
        return result;
    }

    async delete(id) {
        let result = await this.app.mysql.delete(TABLENAME.FOCUS, {
            id
        });
        return result;
    }

    async getAllList(page, pageSize) {
        let ctx = this.ctx;
        page = await ctx.service.common.returnPage(page);
        pageSize = await ctx.service.common.returnPageSize(pageSize);

        let result = await this.app.mysql.select(TABLENAME.FOCUS, {
            limit: pageSize,
            offset: (page - 1) * pageSize
        });
        return result;
    }

    async getSingleDataById(id){
        let result = await this.app.mysql.select(TABLENAME.FOCUS, {
            where: {
                id
            }
        });
        return result;
    }

    // 通过 type 来查询可用状态
    async queryDataByType(type){
        let result = await this.app.mysql.select(TABLENAME.FOCUS, {
            where: {
                type,
                status: 1
            }
        });
        return result;
    }
}

module.exports = FocusService;
