// var images = require("images");

var fs = require("fs");
var rootpath = "./js/nodejs/sharp_test/"
var res = rootpath + "dingque.png";

var sharp = require('sharp');

// sharp(res)
//   .extract({left:2, top:2, width:77, height:79})
//   .toFile(rootpath + "new.png", function(err){});

// var jsonstr = fs.readFileSync(rootpath + "dingque.plist");
// var xmldoc = new XMLDocument();
// xmldoc.lo
// var jsonObj = jsonstr.toJSON();
// console.log(jsonObj);  

var parseString = require('xml2js').parseString;
var xml = fs.readFileSync(rootpath + "dingque.plist");
parseString(xml, function (err, result) {
    console.log(result);

    var pnglist = result.plist.dict[0].dict[0].dict;
    
    for (var key in pnglist){
      var numstr = pnglist[key].string[0];
      var numarr = numstr.match(/\d+(\.\d+)?/g);
      console.log(numarr);
      
      sharp(res)
        .extract({left:parseInt(numarr[0]), top:parseInt(numarr[1]), width:parseInt(numarr[2]), height:parseInt(numarr[3]) } )
        .toFile(rootpath + key + "new.png", function(err){});
    }
});
