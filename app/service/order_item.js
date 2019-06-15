'use strict';

const Service = require('egg').Service;
const TABLENAME = require('./tableName');

class ORDERS_ITEMService extends Service {
    async insert(data) {
        let result = await this.app.mysql.insert(TABLENAME.ORDERS_ITEM, data);
        return result;
    }

    async update(data, id) {
        let result = await this.app.mysql.update(TABLENAME.ORDERS_ITEM, data, {
            where: {
                id
            }
        });
        return result;
    }

    async delete(id) {
        let result = await this.app.mysql.delete(TABLENAME.ORDERS_ITEM, {
            id
        });
        return result;
    }

    async queryDataByOrderId(order_id){
        let result = await this.app.mysql.select(TABLENAME.ORDERS_ITEM, {
            where: {
                order_id
            }
        });
        return result;
    }
}

module.exports = ORDERS_ITEMService;
