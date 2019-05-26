/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
    /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1558801552588_2078';

    // add your middleware config here
    config.middleware = [];

    // add your user config here
    const userConfig = {
        // myAppName: 'egg',
    };

    config.view = {
        mapping: {
            '.html': 'ejs',
            '.nj': 'nunjucks',
        }
    }

    config.session = {
        key: 'SESSION_ID',
        maxAge: 864000, // 1 天
        httpOnly: true,
        encrypt: true,
        renew: true // 延长会话期
    }

    return {
        ...config,
        ...userConfig,
    };
};
