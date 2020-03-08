"use strict"
const express =require('express');
const DB =require('./db');
const config =require('./config');
const bcrypt = require('bcryptjs');
const jwt =require('jsonwebtoken');
const bodyParser =require('body-parser');

const db = new DB('scamregister');
const app express();
const router = express.Router();

router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json())


// define the cors middleware
const allowCrossDomain= function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods','*');
  res.header('Access-Control-Allow-headers','*');
  next();
}

app.use(allowCrossDomain)

// route to register the user
router.post('/register', function(req,res){
  db.insert([
    req.body.name,
    req.body.email,
    bcrypt.hashSync(req.body.password,8)
  ],
  function(err){
    if(err) return res.status(500).send("There was a problem registering the user")
    db.selectByEmail(req.body.email, (err,user)=>{
      if(err) return res.status(500).send("There was a problem getting the user ")
      let token =jwt.sign({id:user.id},config.secret,{expiresIn:86400});
      res.status(200).send({auth:true, token:token, user:user})
    });
  });
});

app.use(router)
let port=process.env.PORT||3000;
let server =app.listen(port, function(){
  console.log(`Express server started on port
    ${port}`);
})
