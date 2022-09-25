//Importing user model from models folder
const User = require('../models/user');


//signup logic for every new user created
exports.signup = (req, res) =>
{
    User.findOne({ email : req.body.email })
    .exec((error, user) =>
    {
        if(user) return res.status(400).json({
            message: 'Email Already Exists'
        });

        const{
            firstName,
            lastName,
            email,
            password
        } = req.body;

        const _user = new User({
            firstName,
            lastName,
            email,
            password,
            username: Math.random().toString()
        });
//After passing inputs, check with save fumction
        _user.save((error,data) => {
            //if input has any error, else not upto standards then throw the error message
            if(error){
                return res.status(400).json({
                    message: 'Something Went Wrong'
                });
            }
//if all requirements are passed, then create a new user
            if(data){
                return res.status(201).json({
                    message: 'User Created Successfully'
                });
            }
        });
    });
}