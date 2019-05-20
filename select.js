
var mysql    = require('mysql');
var connection = mysql.createConnection(
{
  host     : 'localhost',
  user     : 'root',
  password : 'Saswatika21*',
  database : 'testing'
}
);

   connection.connect(function(err) {
   if (err) throw err;
   console.log("Connected!");
    
   var sql="SELECT * FROM student";
   connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("successfully done");
});
 });

