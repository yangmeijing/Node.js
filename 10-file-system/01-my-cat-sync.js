#!/usr/bin/node 

const fs=require('fs');

var file=process.argv[2]||__filename;

console.log(fs.readFileSync(file).toString("utf8"));



