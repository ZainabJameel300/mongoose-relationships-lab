const mongoose = require('mongoose')

//scheema 
const reviewScheema = new mongoose.Schema({
  reviewTitle:{
    type:String
  },
  reviewBody:{
    type:String
  },
  creator:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
},{timestamps:true})

//model

const Review = mongoose.model('Review',reviewScheema)


//export
module.exports = Review