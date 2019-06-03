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
}

module.exports = GoodsService;
