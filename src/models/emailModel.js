const mongoose = require('mongoose')

const emailSchema = new mongoose.Schema({
    email: {
        type: String,
        required:true
      
    },
    period: {
        type: String,

    },
    expire_at: {
        type: String
    
    },
    validate: {
        type: Boolean,
        default:true
    },
    Ip_address: {
        type: String
        
    },
  
    unsubscribe:{
        type:Boolean,
        defalut: false
    },
    unsubscribe_at:{
        type:String,
        default:0
    },
    reason:{
        type:String
        
        
    }
}, { timestamps: true })
module.exports = mongoose.model('Email', emailSchema)
