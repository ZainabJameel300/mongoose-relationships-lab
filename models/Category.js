const mongoose = require('mongoose')

//scheema 
const categoryScheema = new mongoose.Schema({
  categoryName:{
    type:String
  }
},{timestamps:true})

//model

const Category = mongoose.model('Category',categoryScheema)


//export
module.exports = Category