'use strict';

const Service = require('egg').Service;
const TABLENAME = require('./tableName');

class Goods_imageService extends Service {
    async insert(data) {
        let result = await this.app.mysql.insert(TABLENAME.GOODS_IMAGE, data);
        return result;
    }

    async update(data, id) {
        let result = await this.app.mysql.update(TABLENAME.GOODS_IMAGE, data, {
            where: {
                id
            }
        });
        return result;
    }

    async delete(id) {
        let result = await this.app.mysql.delete(TABLENAME.GOODS_IMAGE, {
            id
        });
        return result;
    }

    // 通过ID来查询
    async getSingleDataByGoodsId(goods_id) {
        let result = await this.app.mysql.select(TABLENAME.GOODS_IMAGE, {
            where: {
                goods_id,
                is_delete: 1
            }
        });
        return result;
    }
}

module.exports = Goods_imageService;
