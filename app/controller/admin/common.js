'use strict';

const BaseController = require('./base.js');

class CommonController extends BaseController {
    async changeStatus() {
        /**
         * type 1代表管理员，2代表角色，3代表权限
         * status 1取消， 0赞成
         */
        let ctx = this.ctx,
            { type, status, id } = ctx.query;
        let result = await ctx.service.common.update(type, status, id);
        if (result.affectedRows < 0) {
            ctx.body={"message":'更新失败',"success":false};
        } else {
            ctx.body={"message":'更新成功',"success":true};
        }
    }
}

module.exports = CommonController;
