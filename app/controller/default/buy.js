'use strict';

const Controller = require('egg').Controller;

class BuyController extends Controller {
    async checkout() {
        //签名防止重复提交订单
        let orderSign = await this.service.tools.md5(await this.service.tools.getRandomNum());
        this.ctx.session.orderSign = orderSign;

        let cartList = this.service.cookies.get('cartList');
        let orderList = [];
        let allPrice = 0;
        if (cartList && cartList.length > 0) {
            for (let i = 0; i < cartList.length; i++) {
                if (cartList[i].checked) {
                    orderList.push(cartList[i]);
                    allPrice += cartList[i].price * cartList[i].num;
                }
            }
            let resultList = await this.ctx.service.address.getAllList();
            await this.ctx.render('default/checkout.html', {
                orderList,
                allPrice,
                addressList: resultList,
                orderSign
            });
        } else {
            this.ctx.redirect('/cart')
        }
    }

    // 支付页面
    async confirm() {
        let ctx = this.ctx,
            { id } = ctx.query;
        let result = await ctx.service.order.getSingleDataById(id);
        if (result.length > 0) {
            let orderItemResult = await ctx.service.orderItem.queryDataByOrderId(id);
            await this.ctx.render('default/confirm.html', {
                orderResult: result[0],
                orderItemResult: orderItemResult
            });
        } else {
            // 错误
            this.ctx.redirect('/');
        }
    }

    async doOrder() {
        let ctx = this.ctx;
        /*
           1、获取收货地址信息
           2、需要获取购买商品的信息
           3、把这些信息  放在订单表    
           4、删除购物车里面的数据    
       */

        /*防止提交重复订单*/
        let orderSign = ctx.request.body.orderSign;
        if (orderSign != ctx.session.orderSign) {
            ctx.redirect('/buy/checkout'); // 重新提交
            return false;
        }
        ctx.session.orderSign = null;

        let uid = this.ctx.service.cookies.get('userinfo').id;
        let addressResult = await ctx.service.address.getDataByDefaultAddress(uid);
        let cartList = this.service.cookies.get('cartList');

        if (addressResult && addressResult.length > 0 && cartList && cartList.length > 0) {
            let all_price = 0;
            let orderList = cartList.filter((value) => {
                if (value.checked) {
                    all_price += value.price * value.num;
                    return value;
                }
            });
            let order_id = await this.service.tools.getOrderId(),
                name = addressResult[0].name,
                phone = addressResult[0].phone,
                address = addressResult[0].address,
                zipcode = addressResult[0].zipcode,
                pay_status = 0,
                order_status = 0;
            let orderResult = await ctx.service.order.insert({
                uid,
                order_id,
                name,
                phone,
                address,
                zipcode,
                pay_status,
                order_status,
                all_price
            })

            if (orderResult && orderResult.insertId > 0) {
                for (let i = 0; i < orderList.length; i++) {
                    await ctx.service.orderItem.insert({
                        "order_id": orderResult.insertId,   //订单id
                        "product_title": orderList[i].title,
                        "product_id": orderList[i].id,
                        "product_img": orderList[i].goods_img,
                        "product_price": orderList[i].price,
                        "product_num": orderList[i].num
                    })
                }

                //删除购物车中已经购买的商品             
                let unCheckedCartList = cartList.filter((value) => {
                    if (!value.checked) {
                        return value;
                    }
                })
                this.service.cookies.set('cartList', unCheckedCartList);
                ctx.redirect('/buy/confirm?id=' + orderResult.insertId);
            } else {
                ctx.redirect('/buy/checkout');
            }
        } else {
            ctx.redirect('/buy/checkout');
        }
    }
}

module.exports = BuyController;
