'use strict';

const BaseController = require('./base.js');

class GoodsTypeController extends BaseController {
    async index() {
        //查询商品类型表
        var result= await this.ctx.service.goodsType.getAllList();
        await this.ctx.render('admin/goodsType/index.html',{
            list:result
        });
    }

    async add(){
        await this.ctx.render('admin/goodsType/add');
    }

    async doAdd(){
        let ctx = this.ctx;
        let { title, description } = ctx.request.body;
        let result = await ctx.service.goodsType.insert({title, description});
        if (result && result.insertId > 0) {
            await this.success('/admin/goodsType', '商品类型增加成功');
        } else {
            await this.error('/admin/goodsType', '商品类型增加失败~~~');
        }
    }

    async edit(){
        let ctx = this.ctx;
        let { id } = ctx.query;
        let result = await ctx.service.goodsType.getSingleDataById(id);
        await this.ctx.render('admin/goodsType/edit.html',{
            list:result[0]
        });
    }

    async doEdit(){
        let ctx = this.ctx;
        let { title, description, id } = ctx.request.body;
        let result = await ctx.service.goodsType.update({title, description}, id);
        if (result.affectedRows < 0) {
            await this.error('/admin/goodsType', '商品类型修改失败~~~');
        } else {
            await this.success('/admin/goodsType', '商品类型修改成功');
        }
    }

    async delete() {
        let ctx = this.ctx,
            id = ctx.query.id;
        let _path = ctx.request.header['referer'];
        let result = await ctx.service.goodsType.delete(id);
        this.ctx.redirect(_path);
    }
}

module.exports = GoodsTypeController;
