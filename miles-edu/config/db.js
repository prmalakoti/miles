'use strict';
const mysql = require('mysql');
//local mysql db connection
const dbConn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'milesedu'
});
dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected successfully!");
});
module.exports = dbConn;