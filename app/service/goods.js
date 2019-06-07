'use strict';

const Service = require('egg').Service;
const TABLENAME = require('./tableName');

class GoodsService extends Service {
    async insert(data) {
        let result = await this.app.mysql.insert(TABLENAME.GOODS, data);
        return result;
    }

    async update(data, id) {
        let result = await this.app.mysql.update(TABLENAME.GOODS, data, {
            where: {
                id
            }
        });
        return result;
    }

    async delete(id) {
        let result = await this.app.mysql.delete(TABLENAME.GOODS, {
            id
        });
        return result;
    }

    async getTotal(){
        let _sql = `SELECT COUNT(*) AS TOTAL FROM ${TABLENAME.GOODS}`;
        let result = await this.app.mysql.query(_sql);
        return result[0].TOTAL;
    }

    async getAllList(page, pageSize) {
        let ctx = this.ctx;
        page = await ctx.service.common.returnPage(page);
        pageSize = await ctx.service.common.returnPageSize(pageSize);
        let result = await this.app.mysql.select(TABLENAME.GOODS, {
            where: {
                is_delete:1
            },
            limit: pageSize,
            offset: (page - 1) * pageSize
        });
        return result;
    }

    // 通过ID来查询
    async getSingleDataById(id) {
        let result = await this.app.mysql.select(TABLENAME.GOODS, {
            where: {
                id,
                is_delete:1
            }
        });
        return result;
    }

    // 查询对应的颜色
    async queryGoodsColorById(id) {
        let _sql1 = `SELECT goods_color FROM ${TABLENAME.GOODS} WHERE id = ${id} AND is_delete = 1`;
        let result1 = await this.app.mysql.query(_sql1);
        if (result1 && result1.length > 0 && result1[0].goods_color) {
            let _sql2 = `SELECT * FROM ${TABLENAME.GOODS_COLOR} WHERE id IN(${JSON.parse(result1[0].goods_color).join(',')})`;
            let result2 = await this.app.mysql.query(_sql2);
            return result2;
        } else {
            return []
        }
    }
}

module.exports = GoodsService;
