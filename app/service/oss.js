'use strict';

const Service = require('egg').Service;
const oss = require('ali-oss');
const co = require('co')

class OssService extends Service {

    async put(path, stream) {
        let objectKey = (Math.random() * 1000000000000) + path.substr(path.lastIndexOf('/') + 1);
        let client = new oss({ ...this.config.oss });

        return new Promise((resolve, reject) => {
            co(function* () {
                let result = yield client.put('anker/' + objectKey, stream);
                if (result.res.status == 200) {
                    resolve({
                        status: true,
                        msg: result,
                        objectKey
                    })
                } else {
                    reject({
                        status: false,
                        msg: result
                    })
                }
            }).catch(err => {
                reject({
                    status: false,
                    msg: err
                })
            })
        })
    }
}

module.exports = OssService;
