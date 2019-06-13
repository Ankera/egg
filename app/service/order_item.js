'use strict';

const Service = require('egg').Service;
const TABLENAME = require('./tableName');

class Order_itemService extends Service {
    async insert(data) {
        let result = await this.app.mysql.insert(TABLENAME.ORDER_ITEM, data);
        return result;
    }

    async update(data, id) {
        let result = await this.app.mysql.update(TABLENAME.ORDER_ITEM, data, {
            where: {
                id
            }
        });
        return result;
    }

    async delete(id) {
        let result = await this.app.mysql.delete(TABLENAME.ORDER_ITEM, {
            id
        });
        return result;
    }

    async queryDataByOrderId(order_id){
        let result = await this.app.mysql.select(TABLENAME.ORDER_ITEM, {
            where: {
                order_id
            }
        });
        return result;
    }
}

module.exports = Order_itemService;
