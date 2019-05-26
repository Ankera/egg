'use strict';

const BaseController =require('./base.js');

class AccessController extends BaseController {
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
