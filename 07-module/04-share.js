#!/usr/bin/node 

var count=0;
function Num(){
  this.add=()=>{count++;}
  this.getCount=()=>{return count;}
}


module.exports=Num;


