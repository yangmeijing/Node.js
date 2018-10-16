#!/usr/bin/node

function Bomb() {
    this.message = 'Bomb';

}

Bomb.prototype.explode = function() {
    console.log(this.message);

};

var bomb = new Bomb();

var timeID = setTimeout(bomb.explode.bind(bomb), 2000);
//setTimeout中的bomb.explode中的this指向的是setTimeout，要强制绑定。

clearTimeout(timeID);
