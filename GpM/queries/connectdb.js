const mysql = require('mysql');

var connectdb = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "gm"
  });

module.exports = connectdb;