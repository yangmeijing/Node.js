#!/usr/bin/node

const user={
  name:"杨美静",
  age:20,
  qq:"1806102644"
}
var log=console.log

log("name:%s",user.name);
log("age:%d",user.age);
log("user:%j",user);

log("qq:",user.qq);
log(`qq:${user.qq}`);


console.log("Error:something wrong!");


