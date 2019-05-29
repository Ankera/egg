'use strict';

const BaseController = require('./base.js');

class FocusController extends BaseController {
    async index() {
        let ctx = this.ctx;

        await ctx.render('admin/focus/index.html')
    }

    async add(){
        let ctx = this.ctx;

        await ctx.render('admin/focus/add.html')
    }

    async doAdd(){
        let ctx = this.ctx;

        console.log(ctx.request.body);

        await this.success('/admin/focus', '轮播图增加成功');
    }

    async edit(){
        await ctx.render('admin/focus/edit.html')
    }

    async doEdit(){

    }
}

module.exports = FocusController;
