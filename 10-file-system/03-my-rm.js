#!/usr/bin/node 


const fs  = require('fs'),
      file = process.argv[2];

//确认是文件还是目录，是否存在
//下面是删除文件
 fs.unlinkSync(file);

