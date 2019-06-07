'use strict';

const BaseController = require('./base.js');

class ArticleCateController extends BaseController {
    async index() {
        let ctx = this.ctx,
            result = await ctx.service.articelCate.getDataByPid(0);
        for (let i = 0; i < result.length; i++) {
            let itemResults = await this.ctx.service.articelCate.getDataByPid(result[i].id);
            result[i].items = itemResults;
        }
        await this.ctx.render('admin/articleCate/index', {
            list: result
        });
    }

    async add() {
        let ctx = this.ctx,
            result = await ctx.service.articelCate.getDataByPid(0);
        await this.ctx.render('admin/articleCate/add.html', {
            cateList: result
        })
    }

    async doAdd() {
        let ctx = this.ctx,
            {
                title,
                pid,
                sub_title,
                cate_img,
                keywords,
                description,
                sort,
                status
            } = ctx.request.body;
        let result = await ctx.service.articelCate.insert({
            title,
            pid,
            sub_title,
            cate_img,
            keywords,
            description,
            sort,
            status
        });
        if (result && result.insertId > 0) {
            await this.success('/admin/articleCate', '文章分类增加成功');
        } else {
            await this.error('/admin/articleCate', '文章分类增加失败~~~');
        }
    }

    async edit() {
        let ctx = this.ctx,
            { id } = ctx.query;
        let resultCate = await ctx.service.articelCate.getDataByPid(0);
        let result = await ctx.service.articelCate.getSingleDataByid(id);
        await ctx.render('admin/articleCate/edit.html', {
            list: result[0],
            cateList: resultCate
        })
    }

    async doEdit() {
        let ctx = this.ctx,
            {
                id,
                title,
                pid,
                sub_title,
                cate_img,
                keywords,
                description,
                sort,
                status
            } = ctx.request.body;
        let result = await ctx.service.articelCate.update({
            title,
            pid,
            sub_title,
            cate_img,
            keywords,
            description,
            sort,
            status
        }, id);
        if (result && result.affectedRows > 0) {
            await this.success('/admin/articleCate', '修改文章分类成功');
        } else {
            await this.error('/admin/articleCate', '修改分类增加失败~~~');
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

module.exports = ArticleCateController;
