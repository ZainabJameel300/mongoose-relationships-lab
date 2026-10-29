const mongoose = require('mongoose')

//scheema 
const listingScheema = new mongoose.Schema({
    streetAddress:{
        type: String,
    },
    city:{
        type: String,
    },
    price:{
        type: Number,
    },
    size:{
     type: Number
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }
},{timestamps:true})

//model

const Listing = mongoose.model('Listing',listingScheema)


//export
module.exports = Listing