'use strict';

const Service = require('egg').Service;
const TABLENAME = require('./tableName');

class Goods_attrService extends Service {
    async insert(data) {
        let result = await this.app.mysql.insert(TABLENAME.GOODS_ATTR, data);
        return result;
    }

    async update(data, id) {
        let result = await this.app.mysql.update(TABLENAME.GOODS_ATTR, data, {
            where: {
                id
            }
        });
        return result;
    }

    async delete(id) {
        let result = await this.app.mysql.delete(TABLENAME.GOODS_ATTR, {
            id
        });
        return result;
    }

    async deleteByGoodsId(goods_id) {
        let result = await this.app.mysql.delete(TABLENAME.GOODS_ATTR, {
            goods_id
        });
        return result;
    }

    // 通过ID来查询
    async getSingleDataByGoodsId(goods_id) {
        let result = await this.app.mysql.select(TABLENAME.GOODS_ATTR, {
            where: {
                goods_id
            }
        });
        return result;
    }
}

module.exports = Goods_attrService;
