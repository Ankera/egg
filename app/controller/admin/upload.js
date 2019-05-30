'use strict';

const Controller = require('egg').Controller;
const path = require('path');
const sendToWormhole = require("stream-wormhole");
const toArray = require("stream-to-array");

class UploadController extends Controller {
    async uploadSingleFile() {

        let ctx = this.ctx,
            parts = ctx.multipart(),
            part,
            json = {
                status: false,
                message: "未上传",
                url: ""
            };
        
        while((part = await parts()) != null){
            if(!part.length){
                try {
                    if(part.filename){
                        let name = path.basename(part.filename),
                        partArr = await toArray(part),
                        buffer = Buffer.concat(partArr);

                        let result = await ctx.service.oss.put(name, buffer);
                        json.url = result.msg.url;
                        json.message = '文件上传成功';
                        json.status = true;
                    }
                } catch (error) {
                    ctx.logger.info(error);
                    json.status = false;
                    json.message = '文件上传失败';
                    await sendToWormhole(part);
                }
            }
        }

        ctx.body = json;
    }
}

module.exports = UploadController;
