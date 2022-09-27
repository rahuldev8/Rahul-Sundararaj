const express = require('express'); //importing express framework
const env = require('dotenv'); //importing .env for to load variables
const app = express(); //creating an app using express
const bodyParser = require('body-parser'); //importing bodyparser as a middleware
const mongoose = require('mongoose'); //importing mongoose (a data modelling library)


//importing Routes
const Userroutes = require('./routes/users');


//Environment variables or Constants passed
env.config();

//mangodb connection key
//mongodb+srv://rahuldev:<password>@supreme-cluster.wlw3g3k.mongodb.net/?retryWrites=true&w=majority
//git command line commity test


mongoose.connect(
    `mongodb+srv://${process.env.MANGO_DB_USER}:${process.env.MANGO_DB_PASSWORD}@supreme-cluster.wlw3g3k.mongodb.net/${process.env.MANGO_DB_DATABASE}?retryWrites=true&w=majority`
).then(() => {
   console.log('Database Connected');
});


app.use(express.json());

app.use('/api', Userroutes)

//used to find the current port Number the site is running #2000
app.listen(process.env.PORT, () => {
    console.log(`Server is Currently running on port ${process.env.PORT}`);
 });