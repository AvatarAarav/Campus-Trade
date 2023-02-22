import sqlite3 from 'sqlite3';
var db = new sqlite3.Database('Campus_Trade.db');

// Define the SQL query to retrieve all rows from the table
const query = 'SELECT * FROM products';

// Execute the SQL query and retrieve all rows as an object
db.all(query, [], function(err, rows) {
  if (err) {
    console.error(err.message);
  } else {
    console.log(rows);
  }
});

// Close the database connection
db.close();