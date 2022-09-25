//importing mongoose and bcrypt for database and password encrypting Respectively
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

//Design for new user Database(user details)
const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        trim: true,
        min:3,
        max:25
    },

    lastName:{
        type: String,
        required: true,
        trim: true,
        min:3,
        max:25
    },

    username:{
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true,
        lowercase : true
    },

    email:{
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },

    hash_password:{
        type: String,
        required: true,
    },

    role:{
        type: String,
        enum: ['user','admin'],
        //all users are default are users, not admin or super admins
        default: 'user'
    },

    Contact_Number: {
        type: String
    },

    Profile_Picture:{
        type: String
    }
},{timestamps  : true});

userSchema.virtual('password')
.set(function(password)
{
    this.hash_password = bcrypt.hashSync(password, 10);
});

userSchema.methods = {
    authenticate: function(password){
        return bcrypt.compareSync(password, this.hash_password);
    }
}


//Exporting userschema as module to Mongoose
module.exports = mongoose.model('User',userSchema);
