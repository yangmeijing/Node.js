#!/usr/bin/node 

//流


const fs=require('fs');

var file = process.argv[2]||__filename;



var src=fs.createReadStream(file);

src.on('error',(err)=>{//箭头函数this指向全局
  console.error(err.message);
  process.exit(1);
});

src.on('open',function(){//所以不能用箭头函数。
  this.pipe(process.stdout);
})



