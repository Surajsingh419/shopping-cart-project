const mongoose = require('mongoose')

const bodySchema = new mongoose.Schema({
    sequenceNumber: {
        type: Number,
        required:true
    
    },
    Title: {
        type: String,
        required:true

    },
    Description: {
        type: String,
        
    },
    Active: {
        type: Boolean
    },
   
    haveButton:{
        type:Boolean,
        defalut: false
    },
    buttonURL:{
        type:String
        
    },
    buttonText:{
        type:String
        
        
    }
}, { timestamps: true })
module.exports = mongoose.model('Body', bodySchema)
