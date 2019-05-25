'use strict';

const Controller = require('egg').Controller;

class RoleController extends Controller {
    async index() {
        this.ctx.body = "list";
    }

    async add(){
        this.ctx.body = "add role";
    }

    async edit(){
        this.ctx.body = "edit role";
    }

    async delete(){
        this.ctx.body = "delete role";
    }
}

module.exports = RoleController;
