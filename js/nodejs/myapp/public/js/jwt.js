// sign with default (HMAC SHA256)
var jwt = require('jsonwebtoken');
var fs = require('fs');
var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
//backdate a jwt 30 seconds
var older_token = jwt.sign({ foo: 'bar', iat: Math.floor(Date.now() / 1000) - 30 }, 'shhhhh');

console.log(token)
console.log(older_token)

jwt.verify(token, 'shhhhh', function(err, decoded) {
      if (err) {
        console.dir('error');
      } else {
        // 如果没问题就把解码后的信息保存到请求中，供后面的路由使用
        console.dir(decoded);
      }
    });

// sign with RSA SHA256
// var cert = fs.readFileSync('private.key');  // get private key
// var token = jwt.sign({ foo: 'bar' }, cert, { algorithm: 'RS256'});

// sign asynchronously
// jwt.sign({ foo: 'bar' }, cert, { algorithm: 'RS256' }, function(err, token) {
//   console.log(token);
// });


//http://www.cnblogs.com/pingfan1990/p/4905065.html

// 主要3个方法

// jwt.sign
// jwt.verify
// jwt.decode