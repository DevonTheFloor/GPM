const mysql =require('mysql');

var dbslink = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "gm"
});

dbslink.connect(function(err){
    if(err) throw err;
    console.log("Connecté mySQL on Xampp !!");
    var qy1 = "SELECT * FROM users";
    dbslink.query(qy1, function(err,result){
        if (err) throw err ;
        console.log(result);
    });
});
