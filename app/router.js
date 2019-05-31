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
  
  // 上传图片
  router.post('/admin/uploadFile', controller.admin.upload.uploadSingleFile);
};
