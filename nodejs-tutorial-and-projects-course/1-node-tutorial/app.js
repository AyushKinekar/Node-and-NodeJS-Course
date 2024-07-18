console.log('Hello I am Ayush');


 


// const ayush=async()=>{
// try {
//     await get ()
//     .then((d)=>{

//     }) .catch((e)=>{

//     }) 
// } catch (error) {
    
// }
// }

// const utils = require('util');
//  console.log(utils.callbackify)


// const EventEmitter= require('events');
// const customEmitter= new EventEmitter;
// customEmitter.on('response',()=>{
//     console.log(`data recived`);
// })

// customEmitter.on('Greet',(name,num)=>{
//     console.log('Good Morning '+name+num);
// })

// customEmitter.emit('Greet','Ayush',7)

// const{writeFileSync}=require('fs')
// for (let i=0; i<10000; i++){
//     writeFileSync('./big.txt','hello world'+i+'\n',{flag:'a'})
// }

// const {createReadStream}=require('fs')

// const stream = createReadStream('./big.txt',{
//     highWaterMark:90000,
//     encoding:'utf8'})

// stream.on('data',(result)=>{
//     console.log(result);
// })
// stream.on('error',(err)=>console.log(err))

// var http=require('http')
// var fs = require('fs')

// http
//     .createServer((req,res)=>{
//     // const text =fs.readFileSync('./big.txt','utf8')
//     // res.end(text)

//     const fileStream=fs.createReadStream('./big.txt','utf8');
//     fileStream.on('open',()=>{
//         fileStream.pipe(res)
//     })
//     fileStream.on('error',(err)=>{
//         res.end(err)
//     })
// })
// .listen(5000)