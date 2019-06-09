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
    router.get('/cart', initMiddle, controller.default.flow.cart);

    //用户中心
    router.get('/login', initMiddle, controller.default.user.login);
    router.get('/register', initMiddle, controller.default.user.register);
    router.get('/user', initMiddle, controller.default.user.welcome);
    router.get('/user/order', initMiddle, controller.default.user.order);
}