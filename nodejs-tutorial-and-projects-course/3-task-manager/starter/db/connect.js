const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://Ayush:ayush01@node-and-express-course.zythdzj.mongodb.net/?retryWrites=true&w=majority&appName=Node-and-Express-Course'


mongoose
    .connect(connectionString)
    .then(()=>console.log('CONNECTED'))
    .catch((err)=> console.log(err))