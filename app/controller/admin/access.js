'use strict';

const Controller = require('egg').Controller;

class AccessController extends Controller {
    async index() {
        await this.ctx.render('admin/access/index.html');
    }

    async add(){
        await this.ctx.render('admin/access/add.html');
    }

    async edit(){
        await this.ctx.render('admin/access/edit.html');
    }

    async delete(){
        this.ctx.body = "delete";
    }
}

module.exports = AccessController;
