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
        let role_id = this.ctx.request.query.id
        let result = await this.ctx.service.access.getModuleByModuleId();
        for (let i = 0; i < result.length; i++) {
            let _id = result[i].id;
            let subResult = await this.ctx.service.access.getModuleByModuleId(_id);
            result[i].items = subResult;
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
