'use strict';

const BaseController =require('./base.js');

class RoleController extends BaseController {
    async index() {
        await this.ctx.render('admin/role/index.html');
    }

    async add(){
        await this.ctx.render('admin/role/add.html');
    }

    async edit(){
        await this.ctx.render('admin/role/edit.html');
    }

    async delete(){
        this.ctx.body = "delete role";
    }
}

module.exports = RoleController;
