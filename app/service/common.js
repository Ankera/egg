'use strict';

const Service = require('egg').Service;
const TABLENAME = require('./tableName');

class CommonService extends Service {
    async returnPage(page) {
        let reg = /^[0-9]*$/g;
        if (!page || !reg.test(page)) {
            return this.config.CONSTANT.PAGE;
        } else {
            return Number(page);
        }
    }

    async returnPageSize(pageSize) {
        let reg = /^[0-9]*$/g;
        if (!pageSize || !reg.test(pageSize)) {
            return this.config.CONSTANT.PAGESIZE;
        } else {
            return Number(pageSize);
        }
    }

    /**
     * 更新状态
     * @param {*} type 1代表管理员，2代表角色，3代表权限
     * @param {*} status 1取消， 0赞成
     * @param {*} id 
     */
    async update(type, status, id){
        let tableName = '';
        switch(Number(type)){
            case 1:
                tableName = TABLENAME.ADMIN;
                break;
            case 2:
                tableName = TABLENAME.ROLE;
                break;
            case 3: 
                tableName = TABLENAME.ACCESS;
                break;
        }

        let result = await this.app.mysql.update(tableName, {
            status: status == 1 ? 0 : 1
        }, {
            where: {
                id
            }
        });
        return result;
    }
}

module.exports = CommonService;