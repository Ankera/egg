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

    /**
     * 通过ID来查询
     * @param {*} goods_id 
     * @param {*} color_id 颜色值 color_id， 没有传，则查询所有
     * @param {*} number 查询多少个，默认null，查询所有
     */
    async getSingleDataByGoodsId(goods_id, color_id = "", number = null) {
        let _obj = {
            goods_id,
            is_delete: 1
        }
        if(color_id){
            _obj.color_id = color_id;
        }
        let result = await this.app.mysql.select(TABLENAME.GOODS_IMAGE, {
            where: _obj,
            limit: number
        });
        return result;
    }
}

module.exports = Goods_imageService;
