#!/usr/bin/node 

const avg=process.argv.slice(2),log=console.log;


if(!avg||avg[0]=='--help'||avg[0]=='-h'){
  help();

}
if(avg.length>3){
  avg=avg.slice(0,3);
}



function help(){
  log("usage: cmd-name [OPTION] [expression]\nevaluate the expression.\n\nMandatory arguments to long options are mandatory for short options too.\n  -h, --help output help information and exit\n");
}

if(avg[0]){
log(eval(avg[0]));
}
if(avg[1]){
log(eval(avg[1]));
}
if(avg[2]){
log(eval(avg[2]));
}
