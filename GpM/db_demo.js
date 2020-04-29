var mysql = require('mysql');

var dbslink = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});

dbslink.connect(function(err) {
  if (err) throw err;
  console.log("Connecté mySQL Xampp!");
  dbslink.query();
});