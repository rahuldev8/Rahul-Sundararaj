const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const { signup } = require('../controller/user');



router.post('/signup',signup);

router.post('/signin',(req,res) =>
{ 

    
});

module.exports = router;