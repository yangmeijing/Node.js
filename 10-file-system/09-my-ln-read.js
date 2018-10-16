#!/usr/bin/node 

//读出符号链接
const fs  = require('fs');
var lnk = process.argv[2];

console.log(fs.readlinkSync(lnk));




