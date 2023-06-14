'use strict';
const express=require('express');
const app=express();

const cors=require('cors');
app.use(cors());

// require('dotenv').config();
// const PORT=process.env.PORT;

const pageNotFound = require('./error-handlers/404');
const serverError = require('./error-handlers/500');

const logger=require('./middlrware/logger');
const validator=require('./middlrware/validator');

app.use(logger);
app.get('/',handleTheHome)

app.get('/person',validator, handleTheName);
app.use(serverError);
app.get('*',pageNotFound)

function handleTheHome(req,res){
    res.status(200).json({
        code:200,
        message:'welcome to home page'
    })
}


function handleTheName(req, res) {
  res.status(200).json({
    // code:200,
    name: `${req.name}`
    // name: `${req.name}` 
  });
}

app.get('/bad', badRequest);

function badRequest(req, res, next) {
    req.body = {
      test: 'test'
    }
    
      next({status:500,message: 'Not A Name'})
  }


// app.listen(PORT,() => console.log('UP and running on port: ',PORT));
function start(port){
  app.listen(port, () => console.log('Up and running on port : ', port))
}

module.exports={
  app,
  start
}