const mysql = require('mysql');
const connectdb = require('../queries/connectdb');


exports.getAll = (req,res,next)=>{
    console.log("Connected onMySQL from XAMPP");
    var qy1 = "SELECT * FROM rezo";
    connectdb.query(qy1,function(err,result){
      if (err) throw err;
      console.log(result);
      res.status(200).json(result);
    });
  }

exports.postOne = (req,res,next)=>{

    let auteur = req.body.auteur;
    let message = req.body.message;
    console.log("req.body = ",req.body);
    console.log("Connecté mySQL on Xampp !!");
      var sql = "INSERT INTO rezo VALUES(NULL,?,?,NOW())";
      var inserts = [auteur,message];
      sql = mysql.format(sql,inserts);
      connectdb.query(sql, function(err,result){
          if (err) throw err ;
          console.log("Article posté");
          res.redirect("/rezo.html");
      });
  }