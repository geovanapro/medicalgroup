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
var sql = "INSERT INTO custumers (name, address) VALUES ('Company Inc', 'Highway 37'), ('Company Cia', 'Mountain 21')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});
