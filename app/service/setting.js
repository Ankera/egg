'use strict';

const Service = require('egg').Service;
const TABLENAME = require('./tableName');

// 本数据库表， 只有一条数据，商店设置，只来维护
class SettingService extends Service {
    async update(data, id) {
        let result = await this.app.mysql.update(TABLENAME.SETTING, data, {
            where: {
                id
            }
        });
        return result;
    }

    async queryAllList(){
        let result = await this.app.mysql.select(TABLENAME.SETTING);
        return result;
    }
}

module.exports = SettingService;
