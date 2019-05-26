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
        if(result.length == 0){
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

    async delete() {
        let ctx = this.ctx,
            id = ctx.query.id;
        let _path = ctx.request.header['referer'];
        let result = await ctx.service.role.delete(id);
        this.ctx.redirect(_path);
    }
}

module.exports = RoleController;
