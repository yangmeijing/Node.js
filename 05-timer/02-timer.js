#!/usr/bin/node

console.log('start...');

var count=0;
const timeID = setInterval(loop, 500);

function loop() {
    console.log('I will loop forever!');
    if(++count==10){global.clearTimeout(timeID);}
}
setTimeout(() => {
    global.clearTimeout(timeID);
    console.log('Game Over!');

}, 5000);
