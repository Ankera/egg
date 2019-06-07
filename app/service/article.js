'use strict';

const Service = require('egg').Service;
const TABLENAME = require('./tableName');

class ArticleService extends Service {
    async insert(data) {
        let result = await this.app.mysql.insert(TABLENAME.ARTICLE, data);
        return result;
    }

    async update(data, id) {
        let result = await this.app.mysql.update(TABLENAME.ARTICLE, data, {
            where: {
                id
            }
        });
        return result;
    }

    async delete(id) {
        let result = await this.app.mysql.delete(TABLENAME.ARTICLE, {
            id
        });
        return result;
    }

    // 通过id来查询
    async getSingleDataByid(id){
        let result = await this.app.mysql.select(TABLENAME.ARTICLE, {
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
        let _sql = `
            SELECT 
            a.*,
            ac.title AS articleCateTitle 
            FROM ${TABLENAME.ARTICLE} AS a
            LEFT JOIN ${TABLENAME.ARTICLE_CATE} AS ac
            ON a.cate_id = ac.id 
            LIMIT ${(page - 1) * pageSize}, ${pageSize}
        `;
        let result = await this.app.mysql.query(_sql);
        return result;
    }
}

module.exports = ArticleService;
