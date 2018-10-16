#!/usr/bin/node 

const fs  = require('fs');
var dir = process.argv[2];
//前提这是一个空目录。
fs.rmdirSync(dir);


