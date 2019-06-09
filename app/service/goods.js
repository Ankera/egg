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

    async getTotal(keyword) {
        let _sql = `SELECT COUNT(*) AS TOTAL FROM ${TABLENAME.GOODS} WHERE is_delete = 1 `;
        if (keyword) {
            _sql += ` AND title LIKE '%${keyword}%' `;
        }
        let result = await this.app.mysql.query(_sql);
        return result[0].TOTAL;
    }

    async getAllList(page, pageSize, keyword) {
        let ctx = this.ctx;
        page = await ctx.service.common.returnPage(page);
        pageSize = await ctx.service.common.returnPageSize(pageSize);
        let _sql = `SELECT * FROM ${TABLENAME.GOODS} WHERE is_delete = 1 `;
        if (keyword) {
            _sql += ` AND title LIKE '%${keyword}%' `
        }
        _sql += `LIMIT ${(page - 1) * pageSize}, ${pageSize} `;
        let result = await this.app.mysql.query(_sql);
        return result;
    }

    // 通过ID来查询
    async getSingleDataById(id) {
        let result = await this.app.mysql.select(TABLENAME.GOODS, {
            where: {
                id,
                is_delete: 1
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

    // 通过多个 id来查询
    async queryDataByBatchId(batch_id) {
        let _sql = `SELECT * FROM ${TABLENAME.GOODS} WHERE id IN(${batch_id})`;
        let result = await this.app.mysql.query(_sql);
        return result;
    }

    // 通过分类 cate_id 来查询对应商品
    async queryDataByCateID(cate_id){
        let result = await this.app.mysql.select(TABLENAME.GOODS, {
            where: {
                cate_id,
                is_delete: 1
            }
        });
        return result;
    }

    /**
     * 通过商品类型来查询
     * @param {*} cate_id 大类商品ID
     * @param {*} obj 对象, 什么都不传, 则查询所有
     *            {
     *              is_best: 1,
     *              is_news: 1,
     *              is_hot: 1
     *            }
     * @param {*} number 返回的数量
     */
    async queryRelationGoodsCateId(cate_id, obj, number){
        let _sql = `SELECT * FROM ${TABLENAME.GOODS} WHERE is_delete = 1 `;
        if(typeof obj == "object" && obj != null){
            if(obj.is_best == 1){
                _sql += ` AND is_best = 1 `
            }
            if(obj.is_news == 1){
                _sql += ` AND is_news = 1 `
            }
            if(obj.is_hot == 1){
                _sql += ` AND is_hot = 1 `
            }
        }
        _sql += ` AND cate_id IN(
            SELECT id FROM goods_cate WHERE pid = ${cate_id}
        ) OR cate_id = ${cate_id} LIMIT ${number}`;
        let result = await this.app.mysql.query(_sql);
        return result;
    }
}

module.exports = GoodsService;
