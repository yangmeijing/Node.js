#!/usr/bin/node

process.stdin.resume();

process.on("SIGINT",()=>{
  console.log("程序退出");
  process.exit();

})

process.on("SIGTSTP",()=>{
 console.log("程序挂起");
  process.exit();
})
