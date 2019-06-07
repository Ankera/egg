'use strict';

const BaseController = require('./base.js');

class ArticleController extends BaseController {
    async index() {
        let ctx = this.ctx,
            result = [],
            { page, pageSize } = ctx.query;
        let total = await ctx.service.article.getTotal();
        if (total > 0) {
            result = await ctx.service.article.getAllList(page, pageSize);
        }
        await this.ctx.render('admin/article/index', {
            list: result,
            total,
            page,
            pageSize
        });
    }

    async add() {
        let ctx = this.ctx,
            result = await ctx.service.articeCate.getDataByPid(0);
        for (let i = 0; i < result.length; i++) {
            let itemResults = await this.ctx.service.articeCate.getDataByPid(result[i].id);
            result[i].items = itemResults;
        }
        await this.ctx.render('admin/article/add.html', {
            cateList: result
        });
    }

    async doAdd() {
        let ctx = this.ctx,
            {
                title,
                cate_id,
                article_img,
                link,
                keywords,
                description,
                content,
                sort,
                status
            } = ctx.request.body;
        let result = await ctx.service.article.insert({
            title,
            cate_id,
            article_img,
            link,
            keywords,
            description,
            content,
            sort,
            status
        });
        if (result && result.insertId > 0) {
            await this.success('/admin/article', '文章增加成功');
        } else {
            await this.error('/admin/article', '文章增加失败~~~');
        }
    }

    async edit() {
        let ctx = this.ctx,
            { id } = ctx.query,
            result = await ctx.service.articeCate.getDataByPid(0);
        for (let i = 0; i < result.length; i++) {
            let itemResults = await this.ctx.service.articeCate.getDataByPid(result[i].id);
            result[i].items = itemResults;
        }
        let editResult = await ctx.service.article.getSingleDataByid(id);
        await this.ctx.render('admin/article/edit.html', {
            cateList: result,
            list: editResult[0],
            prevPage:this.ctx.state.prevPage
        });
    }

    async doEdit() {
        let ctx = this.ctx,
            {
                id,
                title,
                cate_id,
                article_img,
                link,
                keywords,
                description,
                content,
                sort,
                status,
                prevPage
            } = ctx.request.body;
        let result = await ctx.service.article.update({
            title,
            cate_id,
            article_img,
            link,
            keywords,
            description,
            content,
            sort,
            status
        }, id);
        
        if (result && result.affectedRows > 0) {
            // await this.success('/admin/article', '修改文章成功');
            await this.success(prevPage, '修改文章成功'); // 跳转上一页
        } else {
            await this.error('/admin/article', '修改分类失败~~~');
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

module.exports = ArticleController;
