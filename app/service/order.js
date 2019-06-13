'use strict';

const Service = require('egg').Service;
const TABLENAME = require('./tableName');

class OrderService extends Service {
    async insert(data) {
        let result = await this.app.mysql.insert(TABLENAME.ORDER, data);
        return result;
    }

    async update(data, id) {
        let result = await this.app.mysql.update(TABLENAME.ORDER, data, {
            where: {
                id
            }
        });
        return result;
    }

    async delete(id) {
        let result = await this.app.mysql.delete(TABLENAME.ORDER, {
            id
        });
        return result;
    }

    async getSingleDataById(id){
        let result = await this.app.mysql.select(TABLENAME.ORDER, {
            where: {
                id
            }
        });
        return result;
    }
}

module.exports = OrderService;
