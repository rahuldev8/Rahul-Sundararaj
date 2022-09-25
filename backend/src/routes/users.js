//Importing All necessary Libraries, framework and folders

const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');

//importing signup logic from controller folder's user file
const { signup } = require('../controller/user');

//signup logic is called
router.post('/signup',signup);

router.post('/signin',(req,res) =>
{ 

    
});

module.exports = router;