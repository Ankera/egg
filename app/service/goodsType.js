'use strict';

const Service = require('egg').Service;
const TABLENAME = require('./tableName');

class GoodsTypeService extends Service {
    async insert(data) {
        let result = await this.app.mysql.insert(TABLENAME.GOODS_TYPE, data);
        return result;
    }

    async update(data, id) {
        let result = await this.app.mysql.update(TABLENAME.GOODS_TYPE, data, {
            where: {
                id
            }
        });
        return result;
    }

    async delete(id) {
        let result = await this.app.mysql.delete(TABLENAME.GOODS_TYPE, {
            id
        });
        return result;
    }

     // 通过ID来查询
     async getSingleDataById(id){
        let result = await this.app.mysql.select(TABLENAME.GOODS_TYPE, {
            where: {
                id
            }
        });
        return result;
    }

    async getAllList(page, pageSize){
        let ctx = this.ctx;
        page = await ctx.service.common.returnPage(page);
        pageSize = await ctx.service.common.returnPageSize(pageSize);

        let result = await this.app.mysql.select(TABLENAME.GOODS_TYPE, {
            limit: pageSize,
            offset: (page - 1) * pageSize
        });
        return result;
    }
}

module.exports = GoodsTypeService;
