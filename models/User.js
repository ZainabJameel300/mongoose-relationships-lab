const mongoose = require('mongoose')

//scheema 
const userScheema = new mongoose.Schema({
    userName :{
        type: String,
        required: true,
        minLenght:15,
        maxLenght:20
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
    },
},{timestamps:true})

//model

const User = mongoose.model('User',userScheema)


//export
module.exports = User