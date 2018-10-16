#!/usr/bin/node 

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data',(data)=>{//ding yue zhe 
  process.stdout.write(data);
});
process.stdin.push("hello");
process.stdin.push(null);

process.stdin.pipe(process.stdout);

for(var num='a'.charCodeAt(0);num<='z'.charCodeAt(0);num++){
  process.stdout.write(String.fromCharCode(num));
}

process.stdin.on('end',()=>{
  process.exit();
});


