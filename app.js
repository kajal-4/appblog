const express=require("express");
const morgan=require("morgan");
const cors=require("cors");
PORT=3008;
require('./db/Connection')
const userRoute = require('./routes/userroutes');

const postRoute =require('./routes/postroute');


const app=express();
app.use(morgan('dev'));
app.use(cors())
app.use('/api',userRoute)
app.use('/api',postRoute)

app.listen(PORT,()=>{
    console.log(`Listening to ${PORT}`)
})