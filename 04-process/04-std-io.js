#!/usr/bin/node

const msg = ["name","email","qq","phone"]

var i=0,me={};

console.log(msg[0]+":");
//事件响应代码
process.stdin.on("data",(data)=>{//data是固定的，事件开始
 // eval("me."+msg[i]+":"+data.slice(0,data.length-1));
 me[msg[i]]=data.slice(0,data.length-1).toString();
  if(i==3){
  
    console.log(me);
    process.exit();
  }else{
    console.log(msg[++i]+":");
  }

 // console.log(data.slice(0,data.length-1).toString("utf8"));
});

process.stdin.on("end",()=>{
  console.log(me);
})//end是固定的，事件结束
