#!/usr/bin/node 

const EventEmitter=require('events').EventEmitter;

function Dog(name,energy){
  var _name=name;
  var _energy=energy;
  var that=this;
  EventEmitter.call(this);//继承，两个都要有，固定写法，EventEmitter中的 Dog都能用了

  
  var timer=setInterval(()=>{
    if(_energy>0){
      that.emit('bark');
      _energy--;
    }else{
      clearInterval(timer);
    }
  },1000);

  this.getname=()=>_name;
  this.getenergy=()=>_energy;

}

Dog.prototype=EventEmitter.prototype;//继承

module.exports=Dog;
