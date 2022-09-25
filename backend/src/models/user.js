const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName :{
        type: String,
        required: true,
        trim: true,
        min:3,
        max:25
    },

    LastName :{
        type: String,
        required: true,
        trim: true,
        min:3,
        max:25
    },

    username :{
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true,
        lowercase : true
    },

    email :{
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },

    hash_password :{
        type: String,
        required: true,
    },

    role :{
        type: String,
        enum: ['user','admin'],
        default: 'admin'
    },

    Contact_Number: {
        type: String
    },

    Profile_Picture :{
        type: String
    }
},{timeStamp : true});

module.exports = mongoose.model('User',userSchema);