'use strict';

const Controller = require('egg').Controller;

class RoleController extends Controller {
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
