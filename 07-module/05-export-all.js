#!/usr/bin/node 

var pi=require('./02-export-var.js');
var circle=require('./02-export-function.js');
var objCircle=require('./02-export-object.js');

var obj={
  pi,
  circle,
  objCircle
}
module.exports=obj;


