'use strict';

const Controller = require('egg').Controller;

class CartController extends Controller {
    async addCart() {
        // 购物车数据保存到本地，登录成功后同步到服务器
        let ctx = this.ctx,
            json = {},
            goodsResult = [],
            colorResult = [],
            { goods_id, color_id } = ctx.query;
        try {
            goodsResult = await ctx.service.goods.getSingleDataById(goods_id);
            colorResult = await ctx.service.goodsColor.getSingleDataById(color_id);

            if (goodsResult.length == 0 || colorResult.length == 0) {
                ctx.status = 404;
                ctx.body = '错误404';   //404
            } else {
                let currentData = {
                    id: goods_id,
                    title: goodsResult[0].title,
                    price: goodsResult[0].shop_price,
                    goods_version: goodsResult[0].goods_version,
                    num: 1,
                    color: colorResult[0].color_name,
                    goods_img: goodsResult[0].goods_img,
                    goods_gift: [],  /*赠品*/
                    checked: true           /*默认选中*/
                }
                let cartList = this.service.cookies.get('cartList');

                if (cartList && cartList.length > 0) {    //存在
                    //4、判断购物车有没有当前数据  
                    if (this.service.cart.cartHasData(cartList, currentData)) {
                        for (let i = 0; i < cartList.length; i++) {
                            if (cartList[i].id == currentData.id) {
                                cartList[i].num = cartList[i].num + 1;
                            }
                        }
                        this.service.cookies.set('cartList', cartList);
                    } else {
                        //如果购物车里面没有当前数据   把购物车以前的数据和当前数据拼接 然后重新写入
                        let tempArr = cartList;
                        tempArr.push(currentData);
                        this.service.cookies.set('cartList', tempArr);
                    }
                } else {
                    // 3、如果购物车没有任何数据  直接把当前数据写入cookies
                    this.service.cookies.set('cartList', [currentData]);
                }
                json.success = true;
                json.meesage = "加入购物车成功"
            }
        } catch (error) {
            ctx.logger.info("购物车:" + error);
        }

        // ctx.body = json;
        this.ctx.redirect('/addCartSuccess?goods_id=' + goods_id + '&color_id=' + color_id);
    }

    // 购物车列表
    async cartList() {
        let cartList = this.service.cookies.get('cartList');
        let allCheck = cartList.every((el, i) => {
            if (el.checked) { // 如果都选中则返回true
                return true
            } else {
                return false
            }
        })
        let allPrice = 0;
        for (let i = 0; i < cartList.length; i++) {
            if (cartList[i].checked) {
                allPrice += cartList[i].price * cartList[i].num;
            }
        }
        await this.ctx.render('default/cart.html', {
            cartList,
            allPrice,
            allCheck
        });
    }

    async addCartSuccess() {
        let ctx = this.ctx,
            goodsResult = [],
            colorResult = [],
            { goods_id, color_id } = ctx.query;
        try {
            goodsResult = await ctx.service.goods.getSingleDataById(goods_id);
            colorResult = await ctx.service.goodsColor.getSingleDataById(color_id);

            if (goodsResult.length == 0 || colorResult.length == 0) {
                ctx.status = 404;
                ctx.body = '错误404';   //404
            } else {
                let title = goodsResult[0].title + '--' + goodsResult[0].goods_version + "--" + colorResult[0].color_name;
                await this.ctx.render('default/add_cart_success.html', {
                    title: title,
                    goods_id: goods_id
                });

            }
        } catch (error) {
            ctx.logger.info("购物车:" + error);
        }
    }

    async incCart() {
        let ctx = this.ctx,
            { goods_id, color } = ctx.query;

        let goodsResult = await await ctx.service.goods.getSingleDataById(goods_id);
        if (goodsResult.length == 0) {
            this.ctx.body = {
                "success": false,
                msg: '修改数量失败'
            }
        } else {

            let cartList = this.service.cookies.get('cartList');
            let currentNum = 0;  //当前数量
            let allPrice = 0;   //总价格
            for (let i = 0; i < cartList.length; i++) {
                if (cartList[i].id == goods_id && cartList[i].color == color) {
                    cartList[i].num += 1;
                    currentNum = cartList[i].num;

                }
                if (cartList[i].checked) {
                    allPrice += cartList[i].price * cartList[i].num;
                }
            }
            this.service.cookies.set('cartList', cartList);
            this.ctx.body = {
                "success": true,
                num: currentNum,
                allPrice: allPrice
            }
        }
    }

    async decCart() {
        let ctx = this.ctx,
            { goods_id, color } = ctx.query;

        let goodsResult = await await ctx.service.goods.getSingleDataById(goods_id);
        if (goodsResult.length == 0) {
            this.ctx.body = {
                "success": false,
                msg: '修改数量失败'
            }
        } else {

            let cartList = this.service.cookies.get('cartList');
            let currentNum = 0;  //当前数量
            let allPrice = 0;   //总价格
            for (let i = 0; i < cartList.length; i++) {
                if (cartList[i].id == goods_id && cartList[i].color == color) {
                    if (cartList[i].num > 1) {
                        cartList[i].num -= 1;
                    }
                    currentNum = cartList[i].num;

                }
                if (cartList[i].checked) {
                    allPrice += cartList[i].price * cartList[i].num;
                }
            }
            this.service.cookies.set('cartList', cartList);
            this.ctx.body = {
                "success": true,
                num: currentNum,
                allPrice: allPrice
            }
        }
    }

    // 修改一条状态
    async changeOneCart() {
        let ctx = this.ctx,
            allPrice = 0,
            { goods_id, color } = ctx.query;

        let goodsResult = await ctx.service.goods.getSingleDataById(goods_id);
        if (goodsResult.length == 0) {
            this.ctx.body = {
                "success": false,
                msg: '修改数量失败'
            }
        } else {
            let cartList = this.service.cookies.get('cartList');
            for (let i = 0; i < cartList.length; i++) {
                if (cartList[i].id == goods_id && cartList[i].color == color) {
                    cartList[i].checked = !cartList[i].checked;
                }
                //计算总价
                if (cartList[i].checked) {
                    allPrice += cartList[i].price * cartList[i].num;
                }
            }

            this.service.cookies.set('cartList', cartList);
            this.ctx.body = {
                "success": true,
                allPrice: allPrice
            }
        }
    }

    async changeAllCart() {
        let ctx = this.ctx,
            allPrice = 0,
            { type } = ctx.query; // type=1全选， 0反选 
        let cartList = this.service.cookies.get('cartList');
        for (let i = 0; i < cartList.length; i++) {
            if (type == 1) {
                cartList[i].checked = true;
            } else {
                cartList[i].checked = false;
            }
            //计算总价
            if (cartList[i].checked) {
                allPrice += cartList[i].price * cartList[i].num;
            }
        }

        this.service.cookies.set('cartList', cartList);
        ctx.body = {
            "success": true,
            allPrice: allPrice
        }
    }

    async removeCart() {
        let ctx = this.ctx,
            { goods_id, color } = ctx.query;

        let goodsResult = await ctx.service.goods.getSingleDataById(goods_id);
        if (goodsResult.length == 0) {
            ctx.redirect('/cart');
        } else {
            let cartList = this.service.cookies.get('cartList');
            for (let i = 0; i < cartList.length; i++) {
                if (cartList[i].id == goods_id && cartList[i].color == color) {
                    cartList.splice(i, 1);
                }
            }
            this.service.cookies.set('cartList', cartList);
            ctx.redirect('/cart');
        }
    }
}

module.exports = CartController;
