const app=require('./index');
const express = require('express')
const bodyParser = require("body-parser");
const cors = require('cors');const dotenv = require("dotenv")
const  connectDB = require('../backend/config/db')



dotenv.config()







app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
connectDB()


app.use(cors());




app.get('/',(req,res)=>{
    res.send("API is Running")
})




app.listen(5000,()=>{
    console.log("server is running")
})