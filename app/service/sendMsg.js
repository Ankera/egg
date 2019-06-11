'use strict';

const Service = require('egg').Service;
const https = require('https');
const qs = require('querystring');

class SendMsgService extends Service {
    async send(mobile, code) {
        let apikey = '4ac28f1a65f35c9a5ae06ed64f9938ea';
        // 修改为您要发送的短信内容
        let text = `您的验证码是${code}。如非本人操作，请忽略本短信`
        // 智能匹配模板发送https地址
        let sms_host = 'sms.yunpian.com';

        let send_sms_uri = '/v2/sms/single_send.json';
        // 指定模板发送接口https地址 

        send_sms(send_sms_uri, apikey, mobile, text);

        function send_sms(uri, apikey, mobile, text) {
            let post_data = {
                'apikey': apikey,
                'mobile': mobile,
                'text': text,
            };//这是需要提交的数据  
            let content = qs.stringify(post_data);
            post(uri, content, sms_host);
        }


        function post(uri, content, host) {
            let options = {
                hostname: host,
                port: 443,
                path: uri,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                }
            };
            let req = https.request(options, function (res) { 
                res.setEncoding('utf8');
                res.on('data', function (chunk) {
                    console.log('BODY: ' + chunk);     //如果错误  自己把它写入一个日志
                });
            });
            
            req.write(content);
            req.end();
        }
    }
}

module.exports = SendMsgService;
