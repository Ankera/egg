'use strict';

const Service = require('egg').Service;
const TABLENAME = require('./tableName');

class RoleAccessService extends Service {
    async insert(data) {
        let result = await this.app.mysql.insert(TABLENAME.ROLE_ACCESS, data);
        return result;
    }

    async update(data, id) {
        let result = await this.app.mysql.update(TABLENAME.ROLE_ACCESS, data, {
            where: {
                id
            }
        });
        return result;
    }

    async delete(id) {
        let result = await this.app.mysql.delete(TABLENAME.ROLE_ACCESS, {
            id
        });
        return result;
    }

    async deleteByRoleId(role_id) {
        let result = await this.app.mysql.delete(TABLENAME.ROLE_ACCESS, {
            role_id
        });
        return result;
    }
}

module.exports = RoleAccessService;
