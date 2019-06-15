'use strict';

const Service = require('egg').Service;
const TABLENAME = require('./tableName');

class OrderService extends Service {
    async insert(data) {
        let result = await this.app.mysql.insert(TABLENAME.ORDERS, data);
        return result;
    }

    async update(data, id) {
        let result = await this.app.mysql.update(TABLENAME.ORDERS, data, {
            where: {
                id
            }
        });
        return result;
    }

    async delete(id) {
        let result = await this.app.mysql.delete(TABLENAME.ORDERS, {
            id
        });
        return result;
    }

    async getSingleDataById(id, uid){
        let result = await this.app.mysql.select(TABLENAME.ORDERS, {
            where: {
                uid,
                id
            }
        });
        return result;
    }

    async getTotal(obj){
        let _sql = `SELECT COUNT(*) AS TOTAL FROM ${TABLENAME.ORDERS} 
            WHERE uid = ${obj.uid} `;
        if(obj.order_status != '' && obj.order_status != undefined){
            _sql += ` AND order_status = ${Number(obj.order_status)} `;
        }
        if(obj.product_title){
            _sql += ` AND id IN(SELECT order_id FROM ${TABLENAME.ORDERS_ITEM} WHERE product_title LIKE '%${obj.product_title}%' )`
        }
        let result = await this.app.mysql.query(_sql);
        return result[0].TOTAL;
    }

    async getAllList(page, pageSize, obj = {}) {
        let ctx = this.ctx;
        page = await ctx.service.common.returnPage(page);
        pageSize = await ctx.service.common.returnPageSize(pageSize);
        let _sql = `SELECT * FROM ${TABLENAME.ORDERS} 
            WHERE uid = ${obj.uid} `;
        if(obj.order_status != '' && obj.order_status != undefined){
            _sql += ` AND order_status = ${Number(obj.order_status)} `;
        }
        if(obj.product_title){
            _sql += ` AND id IN(SELECT order_id FROM ${TABLENAME.ORDERS_ITEM} WHERE product_title LIKE '%${obj.product_title}%') `
        }
        _sql += ` LIMIT ${(page - 1) * pageSize}, ${pageSize}`
        let result = await this.app.mysql.query(_sql);
        return result;
    }
}

module.exports = OrderService;
