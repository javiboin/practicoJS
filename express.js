const express = require('express');
const app = express();
const port = 3000;

app.use(fuction (req, res, next){
  console.log('Time: ', Date.now())
});

app.use('/user/:id', function (req, res, next){
  console.log('Request Type: ', req.method);
  next();
})