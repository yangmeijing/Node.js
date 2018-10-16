#!/usr/bin/node 

const Dog =require('./02-dog.js');

var taidi=new Dog('taidi',5);
var zangao=new Dog('zangao',10);


taidi.on('bark',Bark);
zangao.on('bark',Bark);

function Bark(){
  console.log(this.getname(),this.getenergy());
}
