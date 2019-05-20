
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
    
   var sql="delete student where name = 'aahana' ";
   connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("successfully deleted");
});
 });

