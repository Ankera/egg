'use strict';

const Controller = require('egg').Controller;

class AccessController extends Controller {
    async index() {
        this.ctx.body = "access ";
    }

    async add(){
        this.ctx.body = "add access";
    }

    async edit(){
        this.ctx.body = "edit";
    }

    async delete(){
        this.ctx.body = "delete";
    }
}

module.exports = AccessController;
