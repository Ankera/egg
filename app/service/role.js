'use strict';

const Service = require('egg').Service;
const TABLENAME = require('./tableName');

class RoleService extends Service {

    async insert(data) {
        let result = await this.app.mysql.insert(TABLENAME.ROLE, data);
        return result;
    }

    async update(data, id) {
        let result = await this.app.mysql.update(TABLENAME.ROLE, data, {
            where: {
                id
            }
        });
        return result;
    }

    async delete(id) {
        let result = await this.app.mysql.delete(TABLENAME.ROLE, {
            id
        });
        return result;
    }

    async getSingleDataById(id){
        let result = await this.app.mysql.select(TABLENAME.ROLE, {
            where: {
                id
            }
        });
        return result;
    }

    async getAllList(page, pageSize) {
        let ctx = this.ctx;
        page = await ctx.service.common.returnPage(page);
        pageSize = await ctx.service.common.returnPageSize(pageSize);

        let result = await this.app.mysql.select(TABLENAME.ROLE, {
            limit: pageSize,
            offset: (page - 1) * pageSize
        });
        return result;
    }
}

module.exports = RoleService;
