'use strict';

const Controller = require('egg').Controller;

class AddressController extends Controller {
    async addAddress() {
        let ctx = this.ctx,
            { name, phone, address, zipcode } = ctx.request.body,
            addressCount = await ctx.service.address.getTotal();

        if (addressCount > 20) {
            ctx.body = {
                success: false,
                msg: "增加收货地址失败 收货地址数量超过限制"
            }
        } else {
            let uid = ctx.service.cookies.get('userinfo').id;
            await ctx.service.address.update({
                default_address: 0
            }, { uid });
            let result = await ctx.service.address.insert({
                uid,
                name,
                phone,
                address,
                zipcode,
            });

            if (result.insertId > 0) {
                let resultList = await ctx.service.address.getAllList();
                ctx.body = {
                    success: true,
                    msg: "增加成功",
                    result: resultList,
                }
            } else {
                ctx.body = {
                    success: false,
                    msg: "增加失败"
                }
            }
        }
    }

    async getAddressList() {

    }

    async getOneAddressList() {
        let ctx = this.ctx,
            { id } = ctx.query;
        let result = await ctx.service.address.getDataByid(id);
        if (result.length > 0) {
            ctx.body = {
                success: true,
                msg: '获取成',
                result
            }
        } else {
            ctx.body = {
                success: false,
                msg: '获取失败'
            }
        }
    }

    async changeDefaultAddress() {
        let ctx = this.ctx,
            { id } = ctx.query;
        let uid = ctx.service.cookies.get('userinfo').id;
        await ctx.service.address.update({
            default_address: 0
        }, { uid });
        await ctx.service.address.update({
            default_address: 1
        }, { id });
        this.ctx.body = {
            success: true,
            msg: '更新默认收货地址成功'
        };
    }

    async editAddress() {
        let ctx = this.ctx,
            { name, phone, address, zipcode, id } = ctx.request.body;
        let updateResult = await ctx.service.address.update({
            name, phone, address, zipcode
        }, { id });
        if (updateResult && updateResult.affectedRows > 0) {
            let resultList = await ctx.service.address.getAllList();
            ctx.body = {
                success: true,
                result: resultList,
            }
        }
    }
}

module.exports = AddressController;
