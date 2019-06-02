'use strict';

const Service = require('egg').Service;
const TABLENAME = require('./tableName');

class GoodsCateService extends Service {
    async insert(data) {
        let result = await this.app.mysql.insert(TABLENAME.GOODS_CATE, data);
        return result;
    }

    async update(data, id) {
        let result = await this.app.mysql.update(TABLENAME.GOODS_CATE, data, {
            where: {
                id
            }
        });
        return result;
    }

    async delete(id) {
        let result = await this.app.mysql.delete(TABLENAME.GOODS_CATE, {
            id
        });
        return result;
    }

    /**
     * 获取对应分页
     * @param {*} page 
     * @param {*} pageSize 
     */
    async getAllList(page, pageSize) {
        let ctx = this.ctx;
        page = await ctx.service.common.returnPage(page);
        pageSize = await ctx.service.common.returnPageSize(pageSize);
        let result = await this.app.mysql.select(TABLENAME.GOODS_CATE, {
            limit: pageSize,
            offset: (page - 1) * pageSize
        });
        return result;
    }

    // 通过PID来查询
    async getSingleDataByPid(pid) {
        let result = await this.app.mysql.select(TABLENAME.GOODS_CATE, {
            where: {
                pid
            }
        });
        return result;
    }

    // 通过ID来查询
    async getSingleDataById(id) {
        let result = await this.app.mysql.select(TABLENAME.GOODS_CATE, {
            where: {
                id
            }
        });
        return result;
    }
}

module.exports = GoodsCateService;
