#!/usr/bin/node 

const fs=require('fs');

var file = process.argv[2]||_filename;

fs.readFile(file,(err,data)=>{
  if(err){
    console.log("sorry");
    process.exit(100);
  }else{
    console.log(data.toString('utf8'));
  }
})


