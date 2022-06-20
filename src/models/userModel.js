const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firebaseUid: {
        type: String,
        required: true,
        unique: true

    },
    email: {
        type: String,

    },
    account_type: {
        type: String,
        enum: ["personal", "business"],
        default: "personal"


    },
    firebaseSignInProvider: {
        type: String,
        required: true
    },

    phone_Number: {
        type: Number,
        defalut: false
    },
    upload_Verification: {
        type: String,
        default: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/attachment_75094405.jpg"

    },
    category:[
        {
            type:mongoose.Schema.Types.ObjectId,
        }
    ],
    Active: {
        type: Boolean,
        default:true
    },
    isDeleted: {
        type: Boolean,
        default: false
    },

}, { timestamps: true })
module.exports = mongoose.model('User', userSchema)
