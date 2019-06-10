'use strict';

const Service = require('egg').Service;
const TABLENAME = require('./tableName');

class UserTempService extends Service {
    async insert(data) {
        let result = await this.app.mysql.insert(TABLENAME.USER_TEMP, data);
        return result;
    }

    async update(data, id) {
        let result = await this.app.mysql.update(TABLENAME.USER_TEMP, data, {
            where: {
                id
            }
        });
        return result;
    }

    async delete(id) {
        let result = await this.app.mysql.delete(TABLENAME.USER_TEMP, {
            id
        });
        return result;
    }

    // 通过签名 和 时间来查询 验证码信息
    async queryDataByWhere(where){
        let result = await this.app.mysql.select(TABLENAME.USER_TEMP, {
            where: where
        });
        return result;
    }

    async queryTotalByIpAndday(ip, add_day){
        let _sql = `SELECT COUNT(*) AS TOTAL FROM ${TABLENAME.USER_TEMP} WHERE ip = '${ip}' AND add_day = '${add_day}'`;
        let result = await this.app.mysql.query(_sql);
        return result[0].TOTAL;
    }

}

module.exports = UserTempService;
