'use strict';

const Service = require('egg').Service;
const TABLENAME = require('./tableName');

class AddressService extends Service {
    async insert(data) {
        let result = await this.app.mysql.insert(TABLENAME.ADDRESS, data);
        return result;
    }

    async update(data, obj) {
        let result = await this.app.mysql.update(TABLENAME.ADDRESS, data, {
            where: obj
        });
        return result;
    }

    async delete(id) {
        let result = await this.app.mysql.delete(TABLENAME.ADDRESS, {
            id
        });
        return result;
    }

    async getTotal() {
        let _sql = `SELECT COUNT(*) AS TOTAL FROM ${TABLENAME.ADDRESS}`;
        let result = await this.app.mysql.query(_sql);
        return result[0].TOTAL;
    }

    async getAllList() {
        let result = await this.app.mysql.select(TABLENAME.ADDRESS, {
            orders: [['default_address', 'desc']]
        });
        return result;
    }

    async getDataByid(id){
        let result = await this.app.mysql.select(TABLENAME.ADDRESS, {
            where: {
                id
            }
        });
        return result;
    }

    async getDataByDefaultAddress(uid){
        let result = await this.app.mysql.select(TABLENAME.ADDRESS, {
            where: {
                default_address: 1,
                uid
            }
        });
        return result;
    }
}

module.exports = AddressService;
