#!/usr/bin/node 

const EventEmitter=require('events').EventEmitter;

var emitter=new EventEmitter();

setInterval(()=>{
  emitter.emit("hello");
},1000)

setTimeout(()=>{
  emitter.emit("bye");
},5000)
 
emitter.on('hello',()=>{
  console.log('hello world');
})

emitter.on('bye',()=>{
  console.log('goodbye');
  process.exit();
})



//emitter.listener('hello');
//emitter.removeLister();
