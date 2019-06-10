'use strict';

const Service = require('egg').Service;
const TABLENAME = require('./tableName');

class UserService extends Service {
    async insert(data) {
        let result = await this.app.mysql.insert(TABLENAME.USER, data);
        return result;
    }

    async update(data, id) {
        let result = await this.app.mysql.update(TABLENAME.USER, data, {
            where: {
                id
            }
        });
        return result;
    }

    async delete(id) {
        let result = await this.app.mysql.delete(TABLENAME.USER, {
            id
        });
        return result;
    }

}

module.exports = UserService;
