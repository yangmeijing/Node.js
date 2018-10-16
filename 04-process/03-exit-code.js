#!/usr/bin/node 


var code=process.argv[2];

if(process.argv.length<3){
  console.error("请给出命令行参数");
  process.exit(1);

}

if(typeof code !== 'number'){
  console.error("命令行参数不是数值类型");

 
    process.exit(1);
}

process.exit(code);



