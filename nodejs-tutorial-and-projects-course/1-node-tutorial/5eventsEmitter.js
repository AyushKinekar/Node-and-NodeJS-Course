const EventEmitter= require('events');
const customEmitter= new EventEmitter;
customEmitter.on('response',()=>{
    console.log(`data recived`);
})

customEmitter.on('Greet',(name,num)=>{
    console.log('Good Morning '+name+num);
})

customEmitter.emit('Greet','Ayush',7)