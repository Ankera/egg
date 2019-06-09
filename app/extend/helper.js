const sd = require("silly-datetime");
const showdown  = require('showdown');
module.exports = {

    formatTime(params) {
        return sd.format(params, 'YYYY-MM-DD HH:mm');
    },

    formatAttr(str){
        var converter = new showdown.Converter();       
        return converter.makeHtml(str);
    }
}