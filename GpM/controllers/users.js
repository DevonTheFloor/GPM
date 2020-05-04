const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mysql = require('mysql');
const connectdb = require('../queries/connectdb');


  exports.signup = (req,res,next)=>{
  
    console.log("reqBody dans connect = ",req.body);
    let email = req.body.email;
    let mdp = req.body.mdp;
    bcrypt.hash(mdp,10).then(hash => {
           email = email;
          mdp = hash; 

          console.log("Connecté mySQL on Xampp !!");
          var sql = "INSERT INTO users VALUES(NULL,?,?,NULL)";
          var inserts = [email,hash];
          sql = mysql.format(sql,inserts);
          connectdb.query(sql, function(err,result){
              if (err) throw err ;
              console.log("Utilisateur ajouté");
              res.redirect("/sommaire.html");
          });
    });
  }

/*  exports.signup = (req,res,next)=>{
  
    console.log("reqBody dans connect = ",req.body);
    let email = req.body.email;
    let mdp = req.body.mdp; 

          console.log("Connecté mySQL on Xampp !!");
          var sql = "INSERT INTO users VALUES(NULL,?,?,NULL)";
          var inserts = [email,hash];
          sql = mysql.format(sql,inserts);
          connectdb.query(sql, function(err,result){
              if (err) throw err ;
              console.log("Utilisateur ajouté");
              res.redirect("/sommaire.html");
          });
  }*/

  exports.login = (req,res,next)=>{

    console.log("Connected DBs for login");
    let email = req.body.email;
    let mdp =req.body.mdp;
    var sql = "SELECT email,mdp FROM users WHERE email=?";
    var inserts = [email];
    sql = mysql.format(sql,inserts);
    connectdb.query(sql,function(err,result){
      if (err) throw err;
      console.log(typeof(result));
      console.log(result);
      console.log(req.body.mdp);
      /*let parsesql = JSON.stringify(result);
      let tablo = JSON.parse(parsesql);*/
      console.log("tablo: ",result);
      result.forEach(elemt =>{
        console.log("elmt.mdp :",elemt.mdp);
        bcrypt.compare(req.body.mdp,elemt.mdp ).then(valid =>{
          console.log("mdp=",req.body.mdp);
          console.log("elemtmdp =",elemt.mdp);
          if (!valid) {
            return res.status(401).json({ error: 'Mot de passe incorrect !' });
        }else {
          res.status(200).json({
            email: elemt.email,
            token: jwt.sign({ email: elemt.email },'RANDOM_TOKEN_SECRET',{ expiresIn: '24h' })
          })
        }
      })
      .catch(error => res.status(500).json({message:"probleme de cryptage du token"}));
    });
    res.redirect("/sommaire.html");
  })
}
  /*exports.login = (req,res,next)=>{

    console.log("Connected DBs for login");
    let email = req.body.email;
    var sql = "SELECT email,mdp FROM users WHERE email=?";
    var inserts = [email];
    sql = mysql.format(sql,inserts);
    connectdb.query(sql,function(err,result){
      if (err) throw err;
      console.log("dans la query y a pas d'erreur");
      res.status(200).json(result);
    });

  };*/
