'use strict';

const BaseController = require('./base.js');
const Jimp = require('jimp'); // 图片缩略图

class GoodsCateController extends BaseController {
    async index() {
        let result = await this.ctx.service.goodsCate.getSingleDataByPid(0);
        for (let i = 0; i < result.length; i++) {
            let itemResults = await this.ctx.service.goodsCate.getSingleDataByPid(result[i].id);
            result[i].items = itemResults;
        }
        await this.ctx.render('admin/goodsCate/index',{
            list:result
        });
    }

    async add(){
        let result= await this.ctx.service.goodsCate.getSingleDataByPid(0)
        await this.ctx.render('admin/goodsCate/add',{
            cateList:result
        });
    }

    async doAdd(){
        let ctx = this.ctx;
        let { 
            title, 
            pid, 
            cate_img,
            filter_attr,
            link,
            template,
            sub_title,
            keywords,
            description,
            sort,
            status,
        } = ctx.request.body;
        let result = await ctx.service.goodsCate.insert({
            title, 
            pid, 
            cate_img,
            filter_attr,
            link,
            template,
            sub_title,
            keywords,
            description,
            sort: sort || 100,
            status
        });
        if (result && result.insertId > 0) {
            await this.success('/admin/goodsCate', '商品分类增加成功');
        } else {
            await this.error('/admin/goodsCate', '商品分类增加失败~~~');
        }
    }

    async edit(){
        let { id } = this.ctx.query;
        let result = await this.ctx.service.goodsCate.getSingleDataByPid(0);
        let singleResult = await this.ctx.service.goodsCate.getSingleDataById(id);
        await this.ctx.render('admin/goodsCate/edit',{
            cateList: result,
            list: singleResult[0]
        });
    }

    async doEdit(){
        let ctx = this.ctx;
        let { 
            id,
            title, 
            pid, 
            cate_img,
            filter_attr,
            link,
            template,
            sub_title,
            keywords,
            description,
            sort,
            status,
        } = ctx.request.body;

        let result = await ctx.service.goodsCate.update({
            title, 
            pid, 
            cate_img,
            filter_attr,
            link,
            template,
            sub_title,
            keywords,
            description,
            sort: sort || 100,
            status
        }, id);
        if (result.affectedRows < 0) {
            await this.error('/admin/goodsCate', '商品分类修改失败~~~');
        } else {
            await this.success('/admin/goodsCate', '商品分类修改成功');
        }
    }

    async delete(){
        let ctx = this.ctx,
            id = ctx.query.id;
        let _path = ctx.request.header['referer'];
        let result = await ctx.service.goodsCate.delete(id);
        this.ctx.redirect(_path);
    }
}

module.exports = GoodsCateController;
