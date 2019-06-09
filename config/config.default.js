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
    config.middleware = ['adminauth'];
    config.adminauth = { // 只有路由中有 '/admin' 才起作用
        math: '/admin'
    }

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
        maxAge: 8640000, // 1 天
        httpOnly: true,
        encrypt: true,
        renew: true // 延长会话期
    }

    config.mysql = {
        client: {
            // host
            host: 'localhost',
            // port
            port: '3306',
            // username
            user: 'root',
            // password
            password: 'anker1991',
            // database
            database: 'anker_egg',
        },
        // load into app, default is open
        app: true,
        // load into agent, default is close
        agent: false,
    }

    config.redis = {
        client: {
            port: 6379,          // Redis port
            host: '127.0.0.1',   // Redis host
            password: 'foobared',
            db: 0,
        },
    }

    return {
        ...config,
        ...userConfig,
    };
};
