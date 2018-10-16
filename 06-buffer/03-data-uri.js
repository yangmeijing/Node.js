#!/usr/bin/node

/*const http=require("http"),
      fs=require('fs'),
      path=require("path");
var filename=process.argv[2];
var data=fs.readFileSync(filename).toString("base64");

if(process.argv.length!==3){
  console.log("命令行参数格式：cmd fileName");
  process.exit(1);
}
try{
  data;
}catch(e)
{
  console.error(e.message);
  process.exit(2);
}
var ext=path.extname(filename).toString();
var datauri="data:image/"+ext.slice(1,ext.length)+";base64,"+data;
console.log(datauri);

var html="<DOCTYPE html><html><body><img src='"+datauri+"'/></body></html>";

http.createServer((req,res)=>{
  res.end(html);
}).listen(8080);*/



const fs   = require('fs'),
            http = require('http'),
                  path = require('path'),
                        file = process.argv[2];

if(process.argv.length !== 3) {
    console.error('命令行参数格式：cmd fileName');
      process.exit(1);

}

try {
    var data = fs.readFileSync(file).toString('base64');

} catch(e) {
    console.error(e.message);
      process.exit(2);

}

var ext  = path.extname(file);
var uriData = 'data:image/' + ext.slice(1, ext.length) + ';base64,' + data;

console.log('data uri:\n%s', uriData);

var html = '<!DOCTYPE html><html><body><img alt="'
      + path.basename(file, ext) 
        + '" src="' + uriData + '"></body></html>';
        
        http.createServer((req, res) => {
            console.log(req.headers);
              res.end(html);
        }).listen(8080);


