const mysql = require('mysql');
const connectdb = require('../queries/connectdb');

exports.postOne = (req,res,next)=>{

    let titre = req.body.titre;
    console.log(titre);
    let auteur= "lautre";
    console.log(auteur);
    let message = req.body.message;

    console.log("Connecté mySQL on Xampp !!");
    var sql = "INSERT INTO forum VALUES(NULL,?,?,?,NOW())";
    var inserts = [titre,auteur,message];
    sql = mysql.format(sql,inserts);
    connectdb.query(sql, function(err,result){
        if (err) throw err ;
        console.log("Message posté");
        res.redirect("/forum.html");
    });
}

exports.getAll = (req,res,next)=>{

    console.log("Connecté mySQL on Xampp !!");
    var qy1 = "SELECT * FROM forum";
    connectdb.query(qy1, function(err,result){
        if (err) throw err ;
        console.log(result);
        res.status(200).json(result);
        });
}

