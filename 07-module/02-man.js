#!/usr/bin/node 

/*var pi=require('./02-export-var');

console.log(pi);

console.dir(module);*/
/*
var circle=require('./02-export-function.js');
console.log(circle(10).dinameter());
console.log(circle(10).circumference());
console.log(circle(10).area());
*/
var circle=require('./02-export-object.js');
console.log(circle.dinameter(10));
console.log(circle.circumference(10));
console.log(circle.area(10));
