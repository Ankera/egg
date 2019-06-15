'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    async login() {
        this.ctx.body = "登录"
    }

    async register() {
        this.ctx.body = "登录"
    }

    async welcome() {

        this.ctx.body = "用户中心"
    }

    async order() {
        let ctx = this.ctx,
            result = [],
            elt = this.config.CONSTANT,
            { page, pageSize, order_status, keywords } = ctx.query;
        if (!page) {
            page = elt.PAGE
        }
        if (!pageSize) {
            pageSize = elt.PAGESIZE
        }
        let uid = await ctx.service.cookies.get('userinfo').id;
        let obj = {
            uid,
        };

        // 筛选
        if (order_status != '' && order_status != undefined) {
            obj.order_status = Number(order_status)
        }

        if (keywords) {
            obj.product_title = keywords;
        }

        let total = await ctx.service.order.getTotal(obj);
        if (total > 0) {
            result = await ctx.service.order.getAllList(page, pageSize, obj);
            for (let i = 0; i < result.length; i++) {
                let subResult = await ctx.service.orderItem.queryDataByOrderId(result[i].id);
                result[i].orderItems = subResult;
            }
        }
        await this.ctx.render('default/user/order.html', {
            list: result,
            total,
            page,
            pageSize,
            order_status
        });
    }

    async address() {
        this.ctx.body = "收货地址"

    }

    async orderinfo() {
        let ctx = this.ctx,
            { id } = ctx.query;
        let uid = await ctx.service.cookies.get('userinfo').id;
        let result = await ctx.service.order.getSingleDataById(id, uid);
        result[0].orderItems = await ctx.service.orderItem.queryDataByOrderId(result[0].id);
        await this.ctx.render('default/user/order_info.html', {
            orderInfo: result[0]
        });
    }
}

module.exports = UserController;
