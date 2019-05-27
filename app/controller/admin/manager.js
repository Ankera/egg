'use strict';

const BaseController = require('./base.js');

class ManagerController extends BaseController {
    async index() {
        let result = await this.ctx.service.admin.getAllList();
        await this.ctx.render('admin/manager/index.html', {
            list: result
        });
    }

    async add() {
        let result = await this.ctx.service.role.getAllList();
        await this.ctx.render('admin/manager/add.html', {
            roleResult: result
        });
    }

    async doAdd() {
        let ctx = this.ctx;
        let { username, password, mobile, email, role_id } = ctx.request.body;
        // 先判断用户是否存在
        let resultUsername = await ctx.service.admin.getSingleDataByUsername(username);
        if (resultUsername.length > 0) {
            await this.error('/admin/manager', '该管理员已存在');
            return;
        }

        password = await ctx.service.tools.md5(password);
        let result = await ctx.service.admin.insert({
            username,
            password,
            mobile: Number(mobile),
            email,
            role_id
        });
        if (result && result.insertId > 0) {
            await this.success('/admin/manager', '管理员增加成功');
        } else {
            await this.error('/admin/manager', '管理员增加失败~~~');
        }
    }

    async edit() {
        let ctx = this.ctx,
            { id } = ctx.query,
            result = await ctx.service.role.getAllList(),
            adminResult = await ctx.service.admin.getInformationById(id);
        await this.ctx.render('admin/manager/edit.html', {
            adminResult: adminResult[0],
            roleResult: result
        });
    }

    async doEdit() {
        let ctx = this.ctx;
        let { id, username, password, mobile, email, role_id } = ctx.request.body;
        let _obj = {
            username,
            mobile,
            email,
            role_id
        };
        if (password) { // 如果密码不为空，就修改
            password = await ctx.service.tools.md5(password);
        }
        _obj.password = password;
        let result = await ctx.service.admin.update(_obj, id);
        if (result.affectedRows < 0) {
            await this.error('/admin/manager', '管理员修改失败~~~');
        } else {
            await this.success('/admin/manager', '管理员修改成功');
        }
    }

    async delete() {
        let ctx = this.ctx,
            id = ctx.query.id;
        let _path = ctx.request.header['referer'];
        let result = await ctx.service.admin.delete(id);
        this.ctx.redirect(_path);
    }
}

module.exports = ManagerController;
