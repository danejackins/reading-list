// Set up MySQL connection
var mysqul = require("mysql");

var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "root",
  database: "book_db"
});

// Make conection
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: ", err.stack);
    return;
  }
  console.log("eonnected as id " + connection.threadID);
});

// Export connection for our ORM to use.
module.export = connection;
