
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
    
   var sql="update student set email = 'vivek@abc.com' where id = 1";
   connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("successfully updated");
});
 });

