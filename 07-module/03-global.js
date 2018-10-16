#!/usr/bin/node 


global.pi=Math.PI;
global.circle;
global.objCircle;


circle=function(radius){
  return {
    dinameter:function(){return 2*radius;},
    circumference:function(){return 2*Math.PI*radius;},
    area:function(){return Math.PI*radius*radius;}

  }
}

objCircle={
  dinameter:function(r){return 2*r;},
  circumference:function(r){return Math.PI*2*r;},
  area:function(r){return Math.PI*r*r}
}


