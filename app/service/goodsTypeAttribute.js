'use strict';

const Service = require('egg').Service;
const TABLENAME = require('./tableName');

class GoodsTypeAttributeService extends Service {
    async insert(data) {
        let result = await this.app.mysql.insert(TABLENAME.GOODS_TYPE_ATTRIBUTE, data);
        return result;
    }

    async update(data, id) {
        let result = await this.app.mysql.update(TABLENAME.GOODS_TYPE_ATTRIBUTE, data, {
            where: {
                id
            }
        });
        return result;
    }

    async delete(id) {
        let result = await this.app.mysql.delete(TABLENAME.GOODS_TYPE_ATTRIBUTE, {
            id
        });
        return result;
    }

    // 通过ID来查询
    async getSingleDataById(id){
        let result = await this.app.mysql.select(TABLENAME.GOODS_TYPE_ATTRIBUTE, {
            where: {
                id
            }
        });
        return result;
    }

    // 通过cate_id来查询
    async getSingleDataByCateId(cate_id){
        let result = await this.app.mysql.select(TABLENAME.GOODS_TYPE_ATTRIBUTE, {
            where: {
                cate_id
            }
        });
        return result;
    }

    async getAllList(cate_id ,page, pageSize){
        let ctx = this.ctx;
        page = await ctx.service.common.returnPage(page);
        pageSize = await ctx.service.common.returnPageSize(pageSize);
        let _sql = `SELECT 
            gta.id,
            gta.cate_id,
            gta.title,
            gta.attr_type,
            gta.attr_value,
            gta.status,
            gta.add_time,
            gta.sort,
            gt.title AS parentTitle
            FROM ${TABLENAME.GOODS_TYPE_ATTRIBUTE} AS gta 
            LEFT JOIN ${TABLENAME.GOODS_TYPE} AS gt ON gta.cate_id = gt.id 
            WHERE gta.cate_id = ${cate_id} 
            LIMIT ${(page - 1) * pageSize}, ${pageSize} `;
        let result = await this.app.mysql.query(_sql);
        return result;
    }
}

module.exports = GoodsTypeAttributeService;
