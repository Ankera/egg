'use strict';

const Service = require('egg').Service;

class CartService extends Service {
    //判断cartList里面有没有currentData
    cartHasData(cartList, currentData) {
        if (cartList.length > 0) {
            for (var i = 0; i < cartList.length; i++) {
                if (cartList[i]._id == currentData._id && cartList[i].color == currentData.color) {
                    return true;
                }
            }
            return false;
        }
        return false;
    }
}

module.exports = CartService;
