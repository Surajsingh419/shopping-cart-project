const mongoose = require(mongoose);
const logoSchema =new mongoose.Schema({
logo:{
    type:String
},
logoName:{
    type:String
},
location:{
    type:String
},
}, { timestamps: true })
module.exports = mongoose.model('Logo', logoSchema)
