'use strict';

const Service = require('egg').Service;
const TABLENAME = require('./tableName');

class AdminService extends Service {

    async insert(data) {
        let result = await this.app.mysql.insert(TABLENAME.ADMIN, data);
        return result;
    }

    async update(data, id) {
        let result = await this.app.mysql.update(TABLENAME.ADMIN, data, {
            where: {
                id
            }
        });
        return result;
    }

    async delete(id) {
        let result = await this.app.mysql.delete(TABLENAME.ADMIN, {
            id
        });
        return result;
    }

    /**
     * 查询个人用户信息
     * @param {*} username 
     * @param {*} password 
     */
    async adminInformation(username, password) {
        let result = await this.app.mysql.select(TABLENAME.ADMIN, {
            where: {
                username,
                password
            }
        });
        return result;
    }

    /**
     * 根据用户名判断该用户是否存在
     * @param {*} username 
     */
    async getSingleDataByUsername(username) {
        let result = await this.app.mysql.select(TABLENAME.ADMIN, {
            where: {
                username
            }
        });
        return result;
    }

    async getAllList(page, pageSize) {
        let ctx = this.ctx;
        page = await ctx.service.common.returnPage(page);
        pageSize = await ctx.service.common.returnPageSize(pageSize);

        let _sql = `SELECT
            a.username,
            a.mobile,
            a.email,
            a.status,
            a.is_super,
            a.add_time,
            a.update_time,
            r.title,
            r.description 
            FROM  ${TABLENAME.ADMIN} AS a 
            LEFT JOIN ${TABLENAME.ROLE} AS r ON r.id = a.role_id 
            LIMIT ${(page - 1) * pageSize}, ${pageSize}`;
        let result = await this.app.mysql.query(_sql);
        return result;
    }
}

module.exports = AdminService;
