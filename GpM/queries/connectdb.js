var mysql = require('mysql');

var connectdb = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "gm"
  });
  connectdb.connect(function(err) {
    if (err) throw err
  });

  module.exports = connectdb;