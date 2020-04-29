const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const usersRouters = require('./routes/users');

var mysql = require('mysql');

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


app.use('/api/auth',usersRouters);

app.use('/test/',(req,res,next)=>{
  console.log("param", req.params.prama);
  res.status(200).json({message:"test reçu"});
});

app.post('/api/forum/post',(req,res,next)=>{
  
  connectdb.connect(function(err){
    let auteur = "Oim";
    console.log(req.body);
    /*let titre = "Nouveau message";
    let message = "Bonjour tout le monde";*/
    if(err) throw err;
    console.log("Connecté mySQL on Xampp !!");
    var sql = "INSERT INTO forum VALUES(NULL,?,'auteur',?,NOW())";
    var inserts = [titre,auteur,message];
    sql = mysql.format(sql,inserts);
    connectdb.query(sql, function(err,result){
        if (err) throw err ;
        console.log("Message posté");
        res.redirect("/forum.html");
    });
  });
});

app.get("/api/forum/posts",(req,res,next)=>{
  connectdb.connect(function(err){
    if(err) throw err;
    console.log("Connecté mySQL on Xampp !!");
    var qy1 = "SELECT * FROM forum";
    connectdb.query(qy1, function(err,result){
        if (err) throw err ;
        console.log(result);
        res.status(200).json(result);
        });
    });
});

module.exports = app;