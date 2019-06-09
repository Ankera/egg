'use strict';

const Service = require('egg').Service;

class CacheService extends Service {
    async set(key, value, seconds) {
        value = JSON.stringify(value);
        if (this.app.redis) {
            if (!seconds) {
                await this.app.redis.set(key, value);
            } else {
                await this.app.redis.set(key, value, seconds);
            }
        }
    }

    async get(key) {
        if (this.app.redis) {
            let data = await this.app.redis.get(key);
            if (!data) return;
            return JSON.parse(data);
        }
        return;
    }
}

module.exports = CacheService;
