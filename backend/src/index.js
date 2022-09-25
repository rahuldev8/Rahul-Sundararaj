const express = require('express');
const env = require('dotenv');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


//importing Routes
const Userroutes = require('./routes/users');


//Environment variables or Constants passed
env.config();

//mangodb connection key
//mongodb+srv://root:<password>@supreme-cluster.qlbkopm.mongodb.net/?retryWrites=true&w=majority                     @supreme-cluster.qlbkopm.mongodb.net/
mongoose.connect(
    `mongodb+srv://${process.env.MANGO_DB_USER}:${process.env.MANGO_DB_PASSWORD}@supreme-cluster.qlbkopm.mongodb.net/${process.env.MANGO_DB_DATABASE}?retryWrites=true&w=majority`,
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true

}).then(() => {
   console.log('Database Connected');
});


app.use(express.json());

app.use('/api', Userroutes)

app.listen(process.env.PORT, () => {
    console.log(`Server is Currently running on port ${process.env.PORT}`);
 });