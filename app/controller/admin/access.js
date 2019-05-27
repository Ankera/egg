'use strict';

const BaseController = require('./base.js');

class AccessController extends BaseController {
    async index() {
        /**
         * 1. 先查询所有顶级模板
         * 2. 再顶级模块列表中 module_id = id表格中， 来查询对应顶级模板下有多少子菜单
         */
        let result = await this.ctx.service.access.getModuleByModuleId();
        for (let i = 0; i < result.length; i++) {
            let _id = result[i].id;
            let subResult = await this.ctx.service.access.getModuleByModuleId(_id);
            result[i].items = subResult;
        }

        await this.ctx.render('admin/access/index.html',{
            list: result
        });
    }

    async add() {
        let result = await this.ctx.service.access.getModuleByModuleId();
        await this.ctx.render('admin/access/add.html',{
            moduleList: result
        });
    }

    async doAdd() {
        let ctx = this.ctx;
        let { module_name, type, action_name, url, module_id, sort, description } = ctx.request.body;
        let _obj = {
            module_name,
            type,
            action_name,
            url,
            module_id,
            sort,
            description
        };
        let result = await ctx.service.access.insert(_obj);
        if (result && result.insertId > 0) {
            await this.success('/admin/access', '权限增加成功');
        } else {
            await this.error('/admin/access', '权限增加失败~~~');
        }
    }

    async edit() {
        let ctx = this.ctx,
            { id } = ctx.query,
            result = await this.ctx.service.access.getModuleByModuleId(),
            accessResult = await this.ctx.service.access.getSingleDataById(id);
        await this.ctx.render('admin/access/edit.html', {
            list:accessResult[0],
            moduleList:result
        });
    }

    async doEdit() {
        let ctx = this.ctx;
        let { id, module_name, type, action_name, url, module_id, sort, description } = ctx.request.body;
        let _obj = {
            module_name,
            type,
            action_name,
            url,
            module_id,
            sort,
            description
        };
        let result = await ctx.service.access.update(_obj, id);
        if (result.affectedRows < 0) {
            await this.error('/admin/access', '权限修改失败~~~');
        } else {
            await this.success('/admin/access', '权限修改成功');
        }
    }

    async delete() {
        let ctx = this.ctx,
            id = ctx.query.id;
        let _path = ctx.request.header['referer'];
        let result = await ctx.service.access.delete(id);
        this.ctx.redirect(_path);
    }
}

module.exports = AccessController;
