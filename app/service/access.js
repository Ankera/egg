'use strict';

const Service = require('egg').Service;
const TABLENAME = require('./tableName');

class AccessService extends Service {
    async insert(data) {
        let result = await this.app.mysql.insert(TABLENAME.ACCESS, data);
        return result;
    }

    async update(data, id) {
        let result = await this.app.mysql.update(TABLENAME.ACCESS, data, {
            where: {
                id
            }
        });
        return result;
    }

    async delete(id) {
        let result = await this.app.mysql.delete(TABLENAME.ACCESS, {
            id
        });
        return result;
    }

    /**
     * 通过 自身 module_id 来查询
     * @param {*} module_id 
     */
    async getModuleByModuleId(module_id = 0){
        let result = await this.app.mysql.select(TABLENAME.ACCESS, {
            where: {
                module_id
            }
        });
        return result;
    }

    // 通过ID来查询
    async getSingleDataById(id){
        let result = await this.app.mysql.select(TABLENAME.ACCESS, {
            where: {
                id
            }
        });
        return result;
    }

    // 根据url来获取对应信息
    async getSingleDataByUrl(url){
        let result = await this.app.mysql.select(TABLENAME.ACCESS, {
            where: {
                url
            }
        });
        return result;
    }
}

module.exports = AccessService;
