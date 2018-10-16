#!/usr/bin/node 

const fs=require('fs');

var file=process.argv[2]||__filename;

var len = fs.statSync(file).size,
    buf = new Buffer(len),
    fid = fs.openSync(file,'r');

fs.readSync(fid,buf,len,0);

console.log(buf.toString('utf8'));



