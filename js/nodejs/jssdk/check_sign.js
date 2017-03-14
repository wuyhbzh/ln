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
