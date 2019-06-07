'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/admin', controller.admin.main.index);  
  router.get('/admin/welcome', controller.admin.main.welcome);  

  // 后台路由
  router.get('/admin/login', controller.admin.login.index);
  router.post('/admin/doLogin', controller.admin.login.doLogin);
  router.get('/admin/loginOut', controller.admin.login.loginOut);

  // 登陆&注册时的验证码
  router.get('/admin/verify', controller.admin.base.verify);
  router.get('/admin/auth', controller.admin.base.auth);

  router.get('/admin/manager', controller.admin.manager.index);
  router.get('/admin/manager/add', controller.admin.manager.add);
  router.get('/admin/manager/edit', controller.admin.manager.edit);
  router.get('/admin/manager/delete', controller.admin.manager.delete);
  router.post('/admin/manager/doAdd', controller.admin.manager.doAdd);
  router.post('/admin/manager/doEdit', controller.admin.manager.doEdit);

  // 角色
  router.get('/admin/role', controller.admin.role.index);
  router.get('/admin/role/add', controller.admin.role.add);
  router.get('/admin/role/edit', controller.admin.role.edit);
  router.get('/admin/role/delete', controller.admin.role.delete);
  router.post('/admin/role/doAdd', controller.admin.role.doAdd);
  router.post('/admin/role/doEdit', controller.admin.role.doEdit);
  router.get('/admin/role/auth', controller.admin.role.auth);
  router.post('/admin/role/doAuth', controller.admin.role.doAuth);
  
  // 权限
  router.get('/admin/access', controller.admin.access.index);
  router.get('/admin/access/add', controller.admin.access.add);
  router.get('/admin/access/edit', controller.admin.access.edit);
  router.get('/admin/access/delete', controller.admin.access.delete);
  router.post('/admin/access/doAdd', controller.admin.access.doAdd);
  router.post('/admin/access/doEdit', controller.admin.access.doEdit);

  // 改变状态功能路由
  router.get('/admin/changeStatus', controller.admin.common.changeStatus);
  // 改变排序
  router.get('/admin/editSort', controller.admin.common.editSort);

  // 轮播图
  router.get('/admin/focus', controller.admin.focus.index);
  router.get('/admin/focus/add', controller.admin.focus.add);
  router.get('/admin/focus/edit', controller.admin.focus.edit);
  router.get('/admin/focus/delete', controller.admin.focus.delete);
  router.post('/admin/focus/doEdit', controller.admin.focus.doEdit);
  router.post('/admin/focus/doAdd', controller.admin.focus.doAdd); 

  //颜色管理
  router.get('/admin/goodsColor', controller.admin.goodsColor.index);
  router.get('/admin/goodsColor/add', controller.admin.goodsColor.add);
  router.get('/admin/goodsColor/edit', controller.admin.goodsColor.edit);
  router.get('/admin/goodsColor/delete', controller.admin.goodsColor.delete);
  router.post('/admin/goodsColor/doEdit', controller.admin.goodsColor.doEdit);
  router.post('/admin/goodsColor/doAdd', controller.admin.goodsColor.doAdd); 

  // 上传图片
  router.post('/admin/uploadFile', controller.admin.upload.uploadSingleFile);


  //商品类型
  router.get('/admin/goodsType', controller.admin.goodsType.index);
  router.get('/admin/goodsType/add', controller.admin.goodsType.add);
  router.get('/admin/goodsType/edit', controller.admin.goodsType.edit);
  router.get('/admin/goodsType/delete', controller.admin.goodsType.delete);
  router.post('/admin/goodsType/doEdit', controller.admin.goodsType.doEdit);
  router.post('/admin/goodsType/doAdd', controller.admin.goodsType.doAdd); 

  //商品类型属性
  router.get('/admin/goodsTypeAttribute', controller.admin.goodsTypeAttribute.index);
  router.get('/admin/goodsTypeAttribute/add', controller.admin.goodsTypeAttribute.add);
  router.get('/admin/goodsTypeAttribute/edit', controller.admin.goodsTypeAttribute.edit);
  router.get('/admin/goodsTypeAttribute/delete', controller.admin.goodsTypeAttribute.delete);
  router.post('/admin/goodsTypeAttribute/doEdit', controller.admin.goodsTypeAttribute.doEdit);
  router.post('/admin/goodsTypeAttribute/doAdd', controller.admin.goodsTypeAttribute.doAdd);
  
  //商品分类
  router.get('/admin/goodsCate', controller.admin.goodsCate.index);
  router.get('/admin/goodsCate/add', controller.admin.goodsCate.add);
  router.get('/admin/goodsCate/edit', controller.admin.goodsCate.edit);
  router.get('/admin/goodsCate/delete', controller.admin.goodsCate.delete);
  router.post('/admin/goodsCate/doEdit', controller.admin.goodsCate.doEdit);
  router.post('/admin/goodsCate/doAdd', controller.admin.goodsCate.doAdd);

  // 商品列表
  router.get('/admin/goods', controller.admin.goods.index);
  router.get('/admin/goods/add', controller.admin.goods.add);
  router.post('/admin/goods/doAdd', controller.admin.goods.doAdd);
  router.get('/admin/goods/goodsTypeAttribute', controller.admin.goods.goodsTypeAttribute);
  router.get('/admin/goods/edit', controller.admin.goods.edit);
  router.post('/admin/goods/doEdit', controller.admin.goods.doEdit);
  router.get('/admin/goods/delete', controller.admin.goods.delete);
  router.post('/admin/goods/changeGoodsImageColor', controller.admin.goods.changeGoodsImageColor);//修改商品颜色
  router.get('/admin/goods/goodsImageRemove', controller.admin.goods.goodsImageRemove);
  // 商品专有修改价格，点击量，状态，精品，新品，热销，排序，库存方法
  router.get('/admin/goods/editGoodsCommon', controller.admin.goods.editGoodsCommon);

  //导航模块
  router.get('/admin/nav', controller.admin.nav.index);
  router.get('/admin/nav/add', controller.admin.nav.add);
  router.get('/admin/nav/edit', controller.admin.nav.edit);
  router.post('/admin/nav/doEdit', controller.admin.nav.doEdit);
  router.post('/admin/nav/doAdd', controller.admin.nav.doAdd);
  router.get('/admin/nav/delete', controller.admin.nav.delete);

  // 文章分类
  router.get('/admin/articleCate', controller.admin.articleCate.index);
  router.get('/admin/articleCate/add', controller.admin.articleCate.add);
  router.get('/admin/articleCate/edit', controller.admin.articleCate.edit);
  router.post('/admin/articleCate/doEdit', controller.admin.articleCate.doEdit);
  router.post('/admin/articleCate/doAdd', controller.admin.articleCate.doAdd);
  router.get('/admin/articleCate/delete', controller.admin.articleCate.delete);
};
