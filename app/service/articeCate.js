'use strict';

const Service = require('egg').Service;
const TABLENAME = require('./tableName');

class ArticelCateService extends Service {
    async insert(data) {
        let result = await this.app.mysql.insert(TABLENAME.ARTICLE_CATE, data);
        return result;
    }

    async update(data, id) {
        let result = await this.app.mysql.update(TABLENAME.ARTICLE_CATE, data, {
            where: {
                id
            }
        });
        return result;
    }

    async delete(id) {
        let result = await this.app.mysql.delete(TABLENAME.ARTICLE_CATE, {
            id
        });
        return result;
    }

    // 通过pid来查询
    async getDataByPid(pid){
        let result = await this.app.mysql.select(TABLENAME.ARTICLE_CATE, {
            where: {
                pid
            }
        });
        return result;
    }

    // 通过id来查询
    async getSingleDataById(id){
        let result = await this.app.mysql.select(TABLENAME.ARTICLE_CATE, {
            where: {
                id
            }
        });
        return result;
    }
}

module.exports = ArticelCateService;
