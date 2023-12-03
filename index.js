const express = require('express');
const Port = 8000;

const app = express();

app.listen(Port , function(err){

    if(err){
        console.log(`Error in running server: ${err}`)
    }
    
    console.log(`Server is running on Port: ${Port}`)
});