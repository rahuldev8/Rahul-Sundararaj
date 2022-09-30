//Importing user model from models folder
const user = require('../models/user');
const User = require('../models/user');
const jwt = require('jsonwebtoken');


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

//logic for signin process
exports.signin = (req, res) => {
    User.findOne({
        email: req.body.email
    }).exec((error, User) => {
        if(error)
        {
            return res.status(400).json({ error });
        }
        if(user)
        {
            if(user.authenticate(req.body.password))
            {
                //if there is and existing user and password matches then
                //create a token with a secret key which will used as a session token
                //for that particular user, and it will expire in 60 minutes
                const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET, { expiresIn: '1h'});
                const {firstName, lastName,email,role,fullName} = user;

                res.status(200).json({
                    token,
                    user: {
                        firstName, lastName,email,role,fullName
                    }
                });
            }
            //if password failed to match
            else
            {
                return res.status(400).json({
                    message: 'Incorrect Username or Password '
                })
            }
        }
        else
        {
            return res.status(400).json({ message : 'Something Went Wrong'});
        }

    });
}