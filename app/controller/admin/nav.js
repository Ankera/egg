'use strict';

const BaseController = require('./base.js');

class NavController extends BaseController {
    async index() {
        let ctx = this.ctx,
        result = [],
            { page, pageSize } = ctx.query;
        let total = await ctx.service.nav.getTotal();
        if (total > 0) {
            result = await ctx.service.nav.getAllList(page, pageSize);
        }
        await ctx.render('admin/nav/index.html', {
            list: result,
            total,
            page,
            pageSize
        })
    }

    async add() {
        await this.ctx.render('admin/nav/add.html')
    }

    async doAdd() {
        let ctx = this.ctx,
            {
                title,
                position,
                relation,
                link,
                is_opennew,
                sort,
                status
            } = ctx.request.body;
        let result = await ctx.service.nav.insert({
            title,
            position,
            relation,
            link,
            is_opennew,
            sort,
            status
        })

        if (result && result.insertId > 0) {
            await this.success('/admin/nav', '导航增加成功');
        } else {
            await this.error('/admin/nav', '导航增加失败~~~');
        }
    }

    async edit() {
        let ctx = this.ctx,
            { id } = ctx.query;
        let result = await ctx.service.nav.getSingleDataById(id);

        await ctx.render('admin/nav/edit.html', {
            list: result[0]
        })
    }

    async doEdit() {
        let ctx = this.ctx,
            {
                id,
                title,
                position,
                relation,
                link,
                is_opennew,
                sort,
                status
            } = ctx.request.body;
        let result = await ctx.service.nav.update({
            title,
            position,
            relation,
            link,
            is_opennew,
            sort,
            status
        }, id);
        
        if (result.affectedRows < 0) {
            await this.error('/admin/nav', '导航修改失败~~~');
        } else {
            await this.success('/admin/nav', '导航修改成功');
        }
    }

    async delete() {
        let ctx = this.ctx,
            id = ctx.query.id;
        let _path = ctx.request.header['referer'];
        let result = await ctx.service.nav.delete(id);
        this.ctx.redirect(_path);
    }
}

module.exports = NavController;
