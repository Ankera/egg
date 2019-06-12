'use strict';

const Controller = require('egg').Controller;

class BuyController extends Controller {
    async checkout() {
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
                addressList: resultList
            });
        } else {
            this.ctx.redirect('/cart')
        }
    }
}

module.exports = BuyController;
