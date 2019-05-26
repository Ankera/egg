'use strict';

const Controller = require('egg').Controller;

class ManagerController extends Controller {
    async index() {
        
        await this.ctx.render('admin/manager/index.html');
    }

    async add(){
        await this.ctx.render('admin/manager/add.html');
    }

    async edit(){
        await this.ctx.render('admin/manager/edit.html');
    }
}

module.exports = ManagerController;
