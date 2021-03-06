'use strict';

const Service = require('egg').Service;
const TABLENAME = require('./tableName');

class GoodsColorService extends Service {
    async insert(data) {
        let result = await this.app.mysql.insert(TABLENAME.GOODS_COLOR, data);
        return result;
    }

    async update(data, id) {
        let result = await this.app.mysql.update(TABLENAME.GOODS_COLOR, data, {
            where: {
                id
            }
        });
        return result;
    }

    async delete(id) {
        let result = await this.app.mysql.delete(TABLENAME.GOODS_COLOR, {
            id
        });
        return result;
    }

    async getAllList(page, pageSize) {
        let ctx = this.ctx;
        page = await ctx.service.common.returnPage(page);
        pageSize = await ctx.service.common.returnPageSize(pageSize);
        let result = await this.app.mysql.select(TABLENAME.GOODS_COLOR, {
            limit: pageSize,
            offset: (page - 1) * pageSize
        });
        return result;
    }

     // 通过ID来查询
    async getSingleDataById(id) {
        let result = await this.app.mysql.select(TABLENAME.GOODS_COLOR, {
            where: {
                id
            }
        });
        return result;
    }

    // 通过多个 id来查询
    async queryDataByBatchId(batch_id) {
        let _sql = `SELECT * FROM ${TABLENAME.GOODS_COLOR} WHERE id IN(${batch_id})`;
        let result = await this.app.mysql.query(_sql);
        return result;
    }
}

module.exports = GoodsColorService;
