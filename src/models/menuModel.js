const mongoose = require('mongoose')

const menuSchema = new mongoose.Schema({
    itemId: {
        type: Number,
       // required: true
        //unique: true
    },
    itemsName: {
        type: String,
//required: true
    },
    url: {
        type: String
        //required: true
    },
    urlParameters: {
        type: String
    },
    Icon: {
        type: String
        
    },
    root: {
        type: Number,
        default: 0
        
    },
    haveIcon:{
        type:Boolean,
        defalut: false
    },
    sequenceNumber:{
        type:Number,
        default:0
    },
    active:{
        type:Boolean,
        default: true
    }
}, { timestamps: true })
module.exports = mongoose.model('Menu', menuSchema)
