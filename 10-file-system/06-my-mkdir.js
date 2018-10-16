#!/usr/bin/node 


const fs  = require('fs');
var dir = process.argv[2];

//下面接口的第二个参数是设置权限，number类型，可省略。
fs.mkdirSync(dir);
            

