'use strict';

const Service = require('egg').Service;

class CacheService extends Service {
    async set(key, value, seconds) {
        value = JSON.stringify(value);
        if (!seconds) {
            await this.app.redis.set(key, value);
        } else {
            await this.app.redis.set(key, value, seconds);
        }
    }

    async get(key){
        let data = await this.app.redis.get(key);
        if(!data){
            return "";
        }
        return JSON.parse(data);
    }
}

module.exports = CacheService;
