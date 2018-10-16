#!/usr/bin/node

if(process.argv.length!==3){
  console.log("命令行正确格式：cmd base64_string");
  process.exit(1);
}

const buf=new Buffer(process.argv[2],"base64");
const info=buf.toString("utf8").split(":");

if(info.length!==2){
  console.log("信息有误");
  process.exit(2);
    
}
console.log("name:",info[0]);
console.log("password:",info[1]);

