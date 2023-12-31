require('dotenv').config();

const express = require('express');
const Port = process.env.Port;
const db = require('./config/mongoose');
let bodyparser = require('body-parser');

const app = express();

app.use(bodyparser.urlencoded({extended:true}));

app.use('/', require('./routes/index'));

app.listen(Port , function(err){

    if(err){
        console.log(`Error in running server: ${err}`)
    }

    console.log(`Server is running on Port: ${Port}`)
});
