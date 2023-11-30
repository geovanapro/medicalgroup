var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "phpmyadmin",
  password: "aluno",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
var sql = "DELETE FROM custumers WHERE address = 'Canyon 123'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + "record(s) updated");
  });
});
