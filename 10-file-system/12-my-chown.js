#!/usr/bin/node 

const fs = require('fs');

var file = process.argv[2],
    uid = process.argv[3],
    gid = process.argv[4];

fs.chownSync(file,uid,gid);






