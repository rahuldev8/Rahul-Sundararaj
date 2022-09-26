//Importing All necessary Libraries, framework and folders

const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');

//importing signup and signin logic from controller folder's user file
const { signup,signin } = require('../controller/auth');

//signup logic is called
//when the url has /signup, then it calls signup method
router.post('/signup',signup);

//when the url has /signin, then it calls signin method
router.post('/signin',(req, res) =>
{
    
});

module.exports = router;