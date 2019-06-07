'use strict';

const Service = require('egg').Service;
const TABLENAME = require('./tableName');

class NavService extends Service {
    async insert(data) {
        let result = await this.app.mysql.insert(TABLENAME.NAV, data);
        return result;
    }

    async update(data, id) {
        let result = await this.app.mysql.update(TABLENAME.NAV, data, {
            where: {
                id
            }
        });
        return result;
    }

    async delete(id) {
        let result = await this.app.mysql.delete(TABLENAME.NAV, {
            id
        });
        return result;
    }

    // 通过ID来查询
    async getSingleDataById(id){
        let result = await this.app.mysql.select(TABLENAME.NAV, {
            where: {
                id
            }
        });
        return result;
    }

    async getTotal(){
        let _sql = `SELECT COUNT(*) AS TOTAL FROM ${TABLENAME.GOODS}`;
        let result = await this.app.mysql.query(_sql);
        return result[0].TOTAL;
    }

    async getAllList(page, pageSize){
        let ctx = this.ctx;
        page = await ctx.service.common.returnPage(page);
        pageSize = await ctx.service.common.returnPageSize(pageSize);

        let result = await this.app.mysql.select(TABLENAME.NAV, {
            limit: pageSize,
            offset: (page - 1) * pageSize
        });
        return result;
    }
}

module.exports = NavService;
