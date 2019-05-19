var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Saswatika21*"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  /*Create a database named "mydb2":*/
  con.query("CREATE DATABASE mydb2", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});
