const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const usersRouter = require('./routes/users');
var mysql = require('mysql');
const connectdb = require('./queries/connectdb');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'localhost');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
  
app.use(express.static(path.join(__dirname, 'front')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



app.use('/test/',(req,res,next)=>{
  console.log("param", req.params.prama);
  res.status(200).json({message:"test reçu"});
});

app.use('/api/auth',usersRouter);

app.post('/api/forum/post',(req,res,next)=>{

    console.log("req.body =",req.body);

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
});

app.get("/api/forum/posts",(req,res,next)=>{

    console.log("Connecté mySQL on Xampp !!");
    var qy1 = "SELECT * FROM forum";
    connectdb.query(qy1, function(err,result){
        if (err) throw err ;
        console.log(result);
        res.status(200).json(result);
        });

});

module.exports = app;