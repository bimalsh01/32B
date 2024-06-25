const mongoose = require('mongoose')

// Making schema
const userSchema = new mongoose.Schema({
    firstName : {
        type: String,
        required : true
    },
    lastName : {
        type: String,
        required : true
    },
    email : {
        type: String,
        required : true
    },
    password : {
        type: String,
        required : true
    },
    isAdmin : {
        type : Boolean,
        default : false
    },
    mobile : {
        type : Number,
        required : true,
        default : '9840031602'
    },

    resetPasswordOTP : {
        type : String,
        default : null
    },
    resetPasswordExpires : {
        type : Date,
        default : null
    }

})

const User = mongoose.model('users', userSchema)
module.exports = User;




// https://managepoint.co/