'use strict';

const Service = require('egg').Service;
const url = require('url');

class AuthService extends Service {
    /**
     * 1. 获取当前用户的角色ID
     * 2. 根据role_id获取access_id, 来获取对应用户的权限
     * 3. 获取对应地址栏中所在的access_id
     */
    async checkedAuth() {
        let ctx = this.ctx,
            { role_id, is_super } = ctx.session.userinfo,
            noLoginPath = ['/admin/login', '/admin/verify', '/admin/doLogin', '/admin/loginOut', '/admin/auth'],
            pathname = url.parse(ctx.request.url).pathname,
            noLoginboolean = noLoginPath.some(el => {
            if (el == pathname) {
                return true;
            }
        });

        if(noLoginboolean || is_super == 1){ // 不需要登录就可以访问的地址则忽略， 超级管理员都可以访问
            return true; // 允许访问
        }

        // 获取当前 role_id 的对应的权限ID列表
        let accessReuslt = await ctx.service.roleAccess.getAccessIdByRoleId(role_id);
        let accessResultArray = [];
        accessReuslt.forEach((el,i) => {
            accessResultArray.push(el.access_id);
        });

        // 获取当前路径对应的权限ID
        let currentAccessResult = await ctx.service.access.getSingleDataByUrl(pathname);
        if(currentAccessResult.length > 0){
            let currentAccessId = currentAccessResult[0].id;
            // 当前路径在该当前该用户的权限列表中
            if(accessResultArray.indexOf(currentAccessId) != -1){
                return true; // 允许访问
            }
            return false; // 不允许访问
        }
        return false; // 不允许访问
    }
}

module.exports = AuthService;
