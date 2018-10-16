#!/usr/bin/node

const name=process.argv[2],
      pwd=process.argv[3];

if(process.argv.length!==4){
  console.error("命令行格式：cmd username password");
}

var str = name +":"+pwd;
console.log(str);

var buf = new Buffer(str,"utf8");
 
console.log(buf.toString('Base64'));
    
