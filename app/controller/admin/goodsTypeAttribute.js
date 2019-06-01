'use strict';

const BaseController = require('./base.js');

class GoodsTypeAttributeController extends BaseController {
    
    async index(){
        let ctx = this.ctx;
        let { id } = ctx.query;

        let result= await this.ctx.service.goodsTypeAttribute.getAllList(id);
        await this.ctx.render('admin/goodsTypeAttribute/index.html',{
            list:result,
            cate_id: id
        });
    }

    async add(){
        let cate_id= this.ctx.request.query.id;
        let goodsTypes =  await this.ctx.service.goodsType.getAllList(1, 100);
   
        await this.ctx.render('admin/goodsTypeAttribute/add',{
            cate_id,
            goodsTypes
        });
    }

    async doAdd(){
        let ctx = this.ctx;
        let { title, cate_id, attr_type, attr_value } = ctx.request.body;
        let result = await ctx.service.goodsTypeAttribute.insert({title, cate_id, attr_type, attr_value})
        if (result && result.insertId > 0) {
            await this.success(`/admin/goodsTypeAttribute?id=${cate_id}`, '商品类型属性增加成功');
        } else {
            await this.error(`/admin/goodsTypeAttribute?id=${cate_id}`, '商品类型属性增加失败~~~');
        }
    }

    async edit(){
        let ctx = this.ctx;
        let { id } = ctx.query;
        let result = await ctx.service.goodsTypeAttribute.getSingleDataById(id);
        let goodsTypes =  await this.ctx.service.goodsType.getAllList(1, 100);
        await ctx.render('/admin/goodsTypeAttribute/edit.html',{
            list:result[0],
            goodsTypes
        });
    }

    async doEdit(){
        let ctx = this.ctx;
        let { id, title, cate_id, attr_type, attr_value } = ctx.request.body;
        let result = await ctx.service.goodsTypeAttribute.update({title, cate_id, attr_type, attr_value}, id);
        if (result.affectedRows < 0) {
            await this.error(`/admin/goodsTypeAttribute?id=${cate_id}`, '商品类型属性修改失败~~~');
        } else {
            await this.success(`/admin/goodsTypeAttribute?id=${cate_id}`, '商品类型属性修改成功');
        }
    }

    async delete(){
        let ctx = this.ctx,
        id = ctx.query.id;
        let _path = ctx.request.header['referer'];
        let result = await ctx.service.goodsTypeAttribute.delete(id);
        this.ctx.redirect(_path);
    }
}

module.exports = GoodsTypeAttributeController;
