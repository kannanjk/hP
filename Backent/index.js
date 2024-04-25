const express = require('express')
require('dotenv').config()
const cors = require('cors')
const monggose = require('mongoose')
const login = require('./Controller/UserController')
const bodyParcer = require('body-parser')

const app = express()  

app.use(express.json())
app.use(cors()) 
app.use(bodyParcer.urlencoded({ extended: true }));

monggose.connect(process.env.MONGOURL).then(()=>{
    console.log("Database connected");
})
 
app.listen(process.env.PORT,()=>{
    console.log("Server running");
})

// hr@toolfe.com 
app.use('/user',login)