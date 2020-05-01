const connectdb = require('./queries/connectdb');

app.post('/api/forum/post',(req,res,next)=>{
  
    connectdb.connect(function(err){
  
      console.log("req.body =",req.body);
      let titre = req.body.titre;
      console.log(titre);
      let auteur = req.body.auteur;
      console.log(auteur);
      let message = req.body.message;
      if(err) throw err;
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
  });