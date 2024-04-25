const mongoose = require('mongoose')

const user = mongoose.Schema({
    email:{
        type:String
    },
    password:{
        type:Number
    }
})

const users = mongoose.model('userModel',user)
module.exports =users