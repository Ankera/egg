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
            noLoginPath = ['/admin/login', '/admin/verify', '/admin/doLogin', '/admin/loginOut', '/admin/auth', '/admin'],
            pathname = url.parse(ctx.request.url).pathname,
            noLoginboolean = noLoginPath.some(el => {
                if (el == pathname) {
                    return true;
                }
            });
        

        if (noLoginboolean || is_super == 1) { // 不需要登录就可以访问的地址则忽略， 超级管理员都可以访问
            return true; // 允许访问
        }

        // 获取当前 role_id 的对应的权限ID列表
        let accessReuslt = await ctx.service.roleAccess.getAccessIdByRoleId(role_id);
        let accessResultArray = [];
        accessReuslt.forEach((el, i) => {
            accessResultArray.push(el.access_id);
        });

        // 获取当前路径对应的权限ID
        let currentAccessResult = await ctx.service.access.getSingleDataByUrl(pathname);
        if (currentAccessResult.length > 0) {
            let currentAccessId = currentAccessResult[0].id;
            // 当前路径在该当前该用户的权限列表中
            if (accessResultArray.indexOf(currentAccessId) != -1) {
                return true; // 允许访问
            }
            return false; // 不允许访问
        }
        return false; // 不允许访问
    }

    // 当前用户获取权限列表
    async getAuthList(role_id) {
        let ctx = this.ctx;
        let result = await ctx.service.access.getModuleByModuleId();
        for (let i = 0; i < result.length; i++) {
            let _id = result[i].id;
            let subResult = await ctx.service.access.getModuleByModuleId(_id);
            result[i].items = subResult;
        }

        // 获取当前角色的权限
        let accessReuslt = await ctx.service.roleAccess.getAccessIdByRoleId(role_id);
        let accessResultArray = [];
        accessReuslt.forEach((el, i) => {
            accessResultArray.push(el.access_id);
        })
        /**
         * 1. 获取当前权限，
         * 2. 获取对应的role_id的所有权限，
         * 3. 如果对应的role_id中access_id在所有权限列表中，则表明该角色有此权限
         */
        for (let i = 0; i < result.length; i++) {
            let elt = result[i];
            if (accessResultArray.indexOf(elt.id) != -1) {
                elt.checked = true;
            }
            let _i = 0;
            for (let j = 0; j < elt.items.length; j++) {
                if (accessResultArray.indexOf(elt.items[j].id) != -1) {
                    elt.items[j].checked = true;
                    _i++;
                }
            }
            if (_i > 0) {
                elt._noCildrenNode = true // 表示该模块下至少有一个子权限列表
            } else {
                elt._noCildrenNode = false
            }
        }

        return result;
    }
}

module.exports = AuthService;
