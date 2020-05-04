const mysql = require('mysql');
const connectdb = require('../queries/connectdb');


exports.getAll = (req,res,next)=>{
    console.log("Connecté mySQL on Xampp !!");
      var qy1 = "SELECT * FROM market";
      connectdb.query(qy1, function(err,result){
          if (err) throw err ;
          console.log(result);
          res.status(200).json(result);
          });
  }

exports.postOne = (req,res,next)=>{

    let urlimg = "https://voiture.kidioui.fr/image/img-auto/fiat-punto.jpg";
    let categorie = req.body.categorie;
    let annonce = req.body.annonce;
    let titre = req.body.titre;
    console.log("req.body = ",req.body);
    console.log("Connecté mySQL on Xampp !!");
      var sql = "INSERT INTO market VALUES(NULL,?,?,?,?,NOW())";
      var inserts = [titre,categorie,annonce,urlimg];
      sql = mysql.format(sql,inserts);
      connectdb.query(sql, function(err,result){
          if (err) throw err ;
          console.log("Article mit en vente");
          res.redirect("/market.html");
      });
  }