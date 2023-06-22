const express = require('express')
const  dotenv = require('dotenv')
//import db connection function 
const connectDB = require('./config/db')
const app = express()
dotenv.config()

connectDB()
app.get('/',(req,res)=>{
    res.send('API is running......')
})

const PORT  = process.env.PORT ||  5000

app.listen(PORT, console.log(`Server started on PORT ${PORT}`))
