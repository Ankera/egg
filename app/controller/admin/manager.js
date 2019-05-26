'use strict';

const BaseController =require('./base.js');

class ManagerController extends BaseController {
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
