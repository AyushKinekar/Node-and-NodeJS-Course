
////READ FILE

// const {createReadStream}=require('fs')

// const stream = createReadStream('./big.txt')

// stream.on('data',(result)=>{
//     console.log(result);
// })



//READ STREAM WITH ADITIONAL INFO
const {createReadStream}=require('fs')

const stream1 = createReadStream('./big.txt',{
    highWaterMark:90000,
    encoding:'utf8'})

stream1.on('data',(result)=>{
    console.log(result);
})
stream1.on('error',(err)=>console.log(err))

//