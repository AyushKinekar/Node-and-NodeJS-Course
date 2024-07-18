// const fs=require('fs');
const {readFileSync, writeFileSync}= require('fs')
const first = readFileSync('./tempText1.txt','utf8')
console.log(first);
writeFileSync('./tempText2.txt','This text is written using js')