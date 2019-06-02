'use strict';

const BaseController = require('./base.js');

class GoodsColorController extends BaseController {
    async index() {
        let result = await this.ctx.service.goodsColor.getAllList();
        await this.ctx.render("/admin/goodsColor/index.html", {
            list: result
        });
    }

    async add(){
        await this.ctx.render("/admin/goodsColor/add.html");
    }   

    async doAdd(){
        let ctx = this.ctx;
        let { color_name, color_value, status } = ctx.request.body;
        let result = await ctx.service.goodsColor.insert({color_name, color_value, status});
        if (result && result.insertId > 0) {
            await this.success('/admin/goodsColor', '颜色增加成功');
        } else {
            await this.error('/admin/goodsColor', '颜色增加失败~~~');
        }
    }

    async edit(){
        let { id } = this.ctx.query;
        let result = await this.ctx.service.goodsColor.getSingleDataById(id);
        await this.ctx.render('admin/goodsColor/edit',{
            list: result[0]
        });
    }

    async doEdit(){
        let ctx = this.ctx;
        let { color_name, color_value, status, id } = ctx.request.body;
        let result = await ctx.service.goodsColor.update({
            color_name, 
            color_value, 
            status
        }, id);
        if (result.affectedRows < 0) {
            await this.error('/admin/goodsColor', '颜色修改失败~~~');
        } else {
            await this.success('/admin/goodsColor', '颜色修改成功');
        }
    }

    async delete(){
        let ctx = this.ctx,
            id = ctx.query.id;
        let _path = ctx.request.header['referer'];
        let result = await ctx.service.goodsColor.delete(id);
        this.ctx.redirect(_path);
    }
}

module.exports = GoodsColorController;
