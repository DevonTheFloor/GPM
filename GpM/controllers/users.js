//const bcrypt = require('bcrypt');
//const jwt = require('jsonwentoken');
const mysql = require('mysql');
const connectdb = require('../queries/connectdb');


exports.signup = (req,res,next)=>{

    console.log('url originale', req.originalUrl);
    console.log("req.body =", req.body);
  

      console.log("reqBody dans connect = ",req.body);
      let email = req.body.email;
      let mdp = req.body.mdp;

      console.log("Connecté mySQL on Xampp !!");
      var sql = "INSERT INTO users VALUES(NULL,?,?,NULL)";
      var inserts = [email,mdp];
      sql = mysql.format(sql,inserts);
      connectdb.query(sql, function(err,result){
          if (err) throw err ;
          console.log("Utilisateur ajouté");
          res.redirect("http://localhost:3030/sommaire.html");
      });

  }

