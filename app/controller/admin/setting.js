'use strict';

const BaseController = require('./base.js');

class SettingController extends BaseController {
    async index() {
        let ctx = this.ctx,
            result = await ctx.service.setting.queryAllList();
        await this.ctx.render('admin/setting/index.html', {
            list: result[0]
        });
    }

    async doEdit() {
        let ctx = this.ctx,
            {
                site_title,
                site_logo,
                site_keywords,
                site_description,
                no_picture,
                site_icp,
                site_tel,
                seach_keywords,
                tongji_code
            } = ctx.request.body;
        let result = await ctx.service.setting.update({
            site_title,
            site_logo,
            site_keywords,
            site_description,
            no_picture,
            site_icp,
            site_tel,
            seach_keywords,
            tongji_code
        }, 1);
        if (result.affectedRows < 0) {
            await this.error('/admin/setting', '商店设置修改失败~~~');
        } else {
            await this.success('/admin/setting', '商店设置修改成功');
        }
    }
}

module.exports = SettingController;
