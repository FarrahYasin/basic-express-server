'use strict';
const express=require('express');
const app=express();

const cors=require('cors');
app.use(cors());

require('dotenv').config();
const PORT=process.env.PORT;

app.get('/',handleTheHome)

function handleTheHome(req,res){
    res.status(200).json({
        code:200,
        message:'welcome to home page'
    })
}

app.get('/person/:name', handleTheName);

function handleTheName(req, res) {
  const name = req.params.name;
  res.status(200).json({
    code:200,
    name: name
  });
}

app.listen(PORT,() => console.log('UP and running on port: ',PORT));
