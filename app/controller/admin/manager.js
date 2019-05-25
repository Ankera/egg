'use strict';

const Controller = require('egg').Controller;

class ManagerController extends Controller {
    async index() {
        this.ctx.body = "list";
    }

    async add(){
        this.ctx.body = "add";
    }

    async edit(){
        this.ctx.body = "edit";
    }
}

module.exports = ManagerController;
