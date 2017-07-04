// var images = require("images");

var fs = require("fs");
var rootpath = "./js/nodejs/sharp_test/"
var res = rootpath + "dingque.png";

var sharp = require('sharp');

sharp(res).resize(300, 200).toFile(rootpath + 'output1.jpg', function(err) {
  if (err) {
    throw err;
  }
  // output.jpg is a 300 pixels wide and 200 pixels high image
  // containing a scaled and cropped version of input.jpg
});