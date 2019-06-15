'use strict';

/**
 * 后台管理系统路由
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    let initMiddleware = app.middleware.init({}, app);
    let userauthMiddleware = app.middleware.userauth({}, app);

    router.get('/', initMiddleware, controller.default.index.index);
    router.get('/plist', initMiddleware, controller.default.product.list);
    router.get('/pinfo', initMiddleware, controller.default.product.info);
    router.get('/api/image/getImagelist', controller.default.product.getImagelist);

    //用户中心
    // router.get('/login', initMiddleware, controller.default.user.login);
    // router.get('/register', initMiddleware, controller.default.user.register);
    // router.get('/user', initMiddleware, controller.default.user.welcome);
    // router.get('/user/order', initMiddleware, controller.default.user.order);

    // 加入购物车
    router.get('/addCart', initMiddleware, controller.default.cart.addCart);
    router.get('/cart', initMiddleware, controller.default.cart.cartList);
    router.get('/addCartSuccess', initMiddleware, controller.default.cart.addCartSuccess);
    router.get('/incCart', initMiddleware, controller.default.cart.incCart);
    router.get('/decCart', initMiddleware, controller.default.cart.decCart);
    router.get('/changeOneCart', initMiddleware, controller.default.cart.changeOneCart);
    router.get('/changeAllCart', initMiddleware, controller.default.cart.changeAllCart);
    router.get('/removeCart', initMiddleware, controller.default.cart.removeCart);

    //用户注册登录
    router.get('/login', initMiddleware, controller.default.pass.login);
    router.post('/pass/doLogin', initMiddleware, controller.default.pass.doLogin);
    router.get('/register/registerStep1', initMiddleware, controller.default.pass.registerStep1);
    router.get('/register/registerStep2', initMiddleware, controller.default.pass.registerStep2);
    router.get('/register/registerStep3', initMiddleware, controller.default.pass.registerStep3);
    router.get('/pass/sendCode', initMiddleware, controller.default.pass.sendCode);
    router.get('/pass/validatePhoneCode', initMiddleware, controller.default.pass.validatePhoneCode);
    router.post('/pass/doRegister', initMiddleware, controller.default.pass.doRegister);
    router.get('/pass/loginOut', initMiddleware, controller.default.pass.loginOut);
    // 验证码
    router.get('/verify', initMiddleware, controller.default.base.verify);

    //去结算
    router.get('/buy/checkout', initMiddleware, userauthMiddleware, controller.default.buy.checkout);
    //确认订单去支付
    router.get('/buy/confirm', initMiddleware, userauthMiddleware, controller.default.buy.confirm);
    //提交订单
    router.post('/buy/doOrder', initMiddleware, userauthMiddleware, controller.default.buy.doOrder);

    // address   收货地址（api接口）
    router.post('/user/addAddress', initMiddleware, userauthMiddleware, controller.default.address.addAddress);
    router.get('/user/getAddressList', initMiddleware, userauthMiddleware, controller.default.address.getAddressList);
    router.get('/user/getOneAddressList', initMiddleware, userauthMiddleware, controller.default.address.getOneAddressList);
    router.get('/user/changeDefaultAddress', initMiddleware, userauthMiddleware, controller.default.address.changeDefaultAddress);
    router.post('/user/editAddress', initMiddleware, userauthMiddleware, controller.default.address.editAddress);

    // 用户中心
    router.get('/user/welcome', initMiddleware, userauthMiddleware, controller.default.user.welcome);
    router.get('/user/order', initMiddleware, userauthMiddleware, controller.default.user.order);
    router.get('/user/orderinfo', initMiddleware, userauthMiddleware, controller.default.user.orderinfo);
}