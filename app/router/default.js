'use strict';

/**
 * 后台管理系统路由
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    let initMiddle = app.middleware.init({}, app);

    router.get('/', initMiddle, controller.default.index.index);
    router.get('/plist', initMiddle, controller.default.product.list);
    router.get('/pinfo', initMiddle, controller.default.product.info);
    router.get('/api/image/getImagelist', controller.default.product.getImagelist);

    //用户中心
    // router.get('/login', initMiddle, controller.default.user.login);
    // router.get('/register', initMiddle, controller.default.user.register);
    router.get('/user', initMiddle, controller.default.user.welcome);
    router.get('/user/order', initMiddle, controller.default.user.order);

    // 加入购物车
    router.get('/addCart', initMiddle, controller.default.cart.addCart);
    router.get('/cart', initMiddle, controller.default.cart.cartList);
    router.get('/addCartSuccess', initMiddle, controller.default.cart.addCartSuccess);
    router.get('/incCart', initMiddle, controller.default.cart.incCart);
    router.get('/decCart', initMiddle, controller.default.cart.decCart);
    router.get('/changeOneCart', initMiddle, controller.default.cart.changeOneCart);
    router.get('/changeAllCart', initMiddle, controller.default.cart.changeAllCart);
    router.get('/removeCart', initMiddle, controller.default.cart.removeCart);

    //用户注册登录
    router.get('/login', initMiddle, controller.default.pass.login);
    router.post('/pass/doLogin', initMiddle,controller.default.pass.doLogin);
    router.get('/register/registerStep1', initMiddle, controller.default.pass.registerStep1);
    router.get('/register/registerStep2', initMiddle, controller.default.pass.registerStep2);
    router.get('/register/registerStep3', initMiddle, controller.default.pass.registerStep3);
    router.get('/pass/sendCode', initMiddle, controller.default.pass.sendCode);
    router.get('/pass/validatePhoneCode', initMiddle, controller.default.pass.validatePhoneCode);
    router.post('/pass/doRegister', initMiddle, controller.default.pass.doRegister);
    router.get('/pass/loginOut', initMiddle,controller.default.pass.loginOut);
    // 验证码
    router.get('/verify', initMiddle, controller.default.base.verify);
}