'use strict';

const BaseController = require('./base.js');

class RoleController extends BaseController {
    async index() {
        let result = await this.ctx.service.role.getAllList();
        await this.ctx.render('admin/role/index.html', {
            list: result
        });
    }

    async add() {
        await this.ctx.render('admin/role/add.html');
    }

    // 增加角色
    async doAdd() {
        let ctx = this.ctx;
        let { title, description } = ctx.request.body;
        let result = await ctx.service.role.insert({
            title,
            description
        });
        if (result && result.insertId > 0) {
            await this.success('/admin/role', '角色增加成功');
        } else {
            await this.error('/admin/role', '角色增加失败~~~');
        }
    }

    async edit() {
        let id = this.ctx.query.id;
        let result = await this.ctx.service.role.getSingleDataById(id);
        if (result.length == 0) {
            result = [{}];
        }
        await this.ctx.render('admin/role/edit.html', {
            list: result[0]
        });
    }

    async doEdit() {
        let ctx = this.ctx;
        let { title, description, id } = ctx.request.body;
        let result = await ctx.service.role.update({
            title,
            description
        }, id);
        if (result.affectedRows < 0) {
            await this.error('/admin/role', '角色修改失败~~~');
        } else {
            await this.success('/admin/role', '角色修改成功');
        }
    }

    async auth() {
        let ctx = this.ctx;
        let role_id = ctx.request.query.id
        let result = await ctx.service.access.getModuleByModuleId();
        for (let i = 0; i < result.length; i++) {
            let _id = result[i].id;
            let subResult = await ctx.service.access.getModuleByModuleId(_id);
            result[i].items = subResult;
        }

        // 获取当前角色的权限
        let accessReuslt = await ctx.service.roleAccess.getAccessIdByRoleId(role_id);
        let accessResultArray = [];
        accessReuslt.forEach((el,i) => {
            accessResultArray.push(el.access_id);
        })
        /**
         * 1. 获取当前权限，
         * 2. 获取对应的role_id的所有权限，
         * 3. 如果对应的role_id中access_id在所有权限列表中，则表明该角色有此权限
         */
        for (let i = 0; i < result.length; i++) {
            let elt = result[i];
            if(accessResultArray.indexOf(elt.id) != -1){
                elt.checked = true;
            }
            for (let j = 0; j < elt.items.length; j++) {
                if(accessResultArray.indexOf(elt.items[j].id) != -1){
                    elt.items[j].checked = true;
                }
            }
        }

        await this.ctx.render('admin/role/auth', {
            list: result,
            role_id: role_id
        });
    }

    async doAuth() {
        /**
         * 1. 先删除当前角色的所有权限
         * 2. 再重新授权
         */
        let ctx = this.ctx,
            { role_id, access_node } = ctx.request.body,
            accessBoolean = true;

        await ctx.service.roleAccess.deleteByRoleId(role_id);

        for (let i = 0; i < access_node.length; i++) {
            let result = await ctx.service.roleAccess.insert({
                role_id,
                access_id: access_node[i]
            })
            if (result && result.insertId > 0) {
                // ctx.logger.info('添加成功～～～')
            } else {
                accessBoolean = false; // 如果失败则立即停止插入数据
                break;
            }
        }
        if (accessBoolean) {
            await this.success('/admin/role', '角色授权成功');
        } else {
            await this.error('/admin/role', '角色授权失败~~~');
        }
    }

    async delete() {
        let ctx = this.ctx,
            id = ctx.query.id;
        let _path = ctx.request.header['referer'];
        let result = await ctx.service.role.delete(id);
        this.ctx.redirect(_path);
    }
}

module.exports = RoleController;
