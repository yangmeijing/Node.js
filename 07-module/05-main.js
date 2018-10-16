#!/usr/bin/node 

var obj=require('./05-export-all.js');
var log=console.log;

log(obj.pi);
log(obj.circle(10).dinameter());
log(obj.objCircle.dinameter(10));



