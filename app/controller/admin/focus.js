'use strict';

const BaseController = require('./base.js');

class FocusController extends BaseController {
    async index() {
        let ctx = this.ctx;
        let result = await ctx.service.focus.getAllList();
        await ctx.render('admin/focus/index.html',{
            list: result
        })
    }

    async add(){
        await this.ctx.render('admin/focus/add.html')
    }

    async doAdd(){
        let ctx = this.ctx;
        let { type, title, link, focus_img, sort, status } = ctx.request.body;
        let _obj = {type, title, link, focus_img, sort, status};
        let result = await ctx.service.focus.insert(_obj);
        if (result && result.insertId > 0) {
            await this.success('/admin/focus', '轮播图增加成功');
        } else {
            await this.error('/admin/access', '轮播图增加失败~~~');
        }
    }

    async edit(){
        let ctx = this.ctx,
            { id } = ctx.query;
        let result = await ctx.service.focus.getSingleDataById(id);
        await ctx.render('admin/focus/edit.html', {
            list:result[0]
        })
    }

    async doEdit(){
        let ctx = this.ctx;
        let { id, type, title, link, focus_img, sort, status } = ctx.request.body;
        let _obj = {type, title, link, focus_img, sort, status};
        let result = await ctx.service.focus.update(_obj, id);
        if (result.affectedRows < 0) {
            await this.error('/admin/focus', '轮播图修改失败~~~');
        } else {
            await this.success('/admin/focus', '轮播图修改成功');
        }
    }

    async delete() {
        let ctx = this.ctx,
            id = ctx.query.id;
        let _path = ctx.request.header['referer'];
        let result = await ctx.service.focus.delete(id);
        this.ctx.redirect(_path);
    }
}

module.exports = FocusController;
