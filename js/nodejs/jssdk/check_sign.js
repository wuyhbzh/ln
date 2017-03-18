// 微信sdk
var sign = require('./sign.js');
var config = sign('jsapi_ticket', 'http://gamebzh.net');
console.log(config.nonceStr);

/*
 *something like this
 *{
 *  jsapi_ticket: 'jsapi_ticket',
 *  nonceStr: '82zklqj7ycoywrk',
 *  timestamp: '1415171822',
 *  url: 'http://example.com',
 *  signature: '1316ed92e0827786cfda3ae355f33760c4f70c1f'
 *}
 */


var appId = "1";
var timestamp = parseInt(new Date().getTime() / 1000) + '';
var nonceStr =  Math.random().toString(36).substr(2, 15);
var package = "package";
var signType = "MD5";
// appId, timeStamp, nonceStr, package, signType

console.log(timestamp, nonceStr);
// wx.chooseWXPay({
//     timestamp: 0, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
//     nonceStr: '', // 支付签名随机串，不长于 32 位
//     package: '', // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
//     signType: '', // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
//     paySign: '', // 支付签名
//     success: function (res) {
//         // 支付成功后的回调函数
//     }
// });
