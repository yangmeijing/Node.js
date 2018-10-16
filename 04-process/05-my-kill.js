#!/usr/bin/node

const id=process.argv[3],
      sig=process.argv[2];


process.kill(id,sig);
