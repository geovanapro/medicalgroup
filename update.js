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
var sql = "UPDATE custumers SET name = 'Company Inc' WHERE address = 'Company Cia'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + "record(s) updated");
  });
});
