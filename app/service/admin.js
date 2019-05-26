'use strict';

const Service = require('egg').Service;
const TABLENAME = require('./tableName');

class AdminService extends Service {

    async insert(data){
        let result = await this.app.mysql.insert(TABLENAME.ADMIN, data);
        return result;
    }

    async update(id, data){
        let result = await this.app.mysql.update(TABLENAME.ADMIN, data, {
            where: {
                id
            }
        });
        return result;
    }

    async delete(id){
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
        let result =  await this.app.mysql.select(TABLENAME.ADMIN, {
            where: {
                username,
                password
            }
        });
        return result;
    }
}

module.exports = AdminService;
