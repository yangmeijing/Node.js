#!/usr/bin/node 

const log=console.log;

log("arch:",process.arch);
log("platform:",process.platform);

log("id:",process.pid);
log("exePath:",process.execPath);

//:process.stdin.resume();

log("nodeversion",process.version);
log("uid",process.getuid());
log("gid",process.getgid());
log("nowPath:%s\n",process.cwd());;

log('rss:', process.memoryUsage().rss);
log('heapTotal:', process.memoryUsage().heapTotal);
log('heapUsed:', process.memoryUsage().heapUsed);
log('external: %s\n', process.memoryUsage().external);

log('env:', process.env);

log('host name:', process.env.HOSTNAME);
                                                      
