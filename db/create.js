import sqlite3 from 'sqlite3';
var db = new sqlite3.Database('Campus_Trade.db');
import { users, products } from './dummy_data.js';

// Check if table exists
db.get(`SELECT name FROM sqlite_master WHERE type='table' AND name='products'`, (err, row) => {
  if (err) {
    console.error(err.message);
  } else if (row) {
    console.log(`Table products exists in the database`);
  } else {
    console.log(`Table products does not exist in the database`);
    console.log('Entering Data!!');
    // Define the SQL query to create the table
    const createTableQuery = `CREATE TABLE IF NOT EXISTS products (
          id INTEGER PRIMARY KEY,
          name TEXT,
          type TEXT,
          description TEXT,
          how_much_old TEXT,
          price TEXT,
          img1_link TEXT,
          img2_link TEXT,
          img3_link TEXT
        )`;
    // Execute the SQL query to create the table
    db.run(createTableQuery, [], function (err) {
      if (err) {
        console.error(err.message);
      } else {
        console.log('Products Table created successfully');

        // Define the SQL query to insert data into the table
        var insertDataQuery = `INSERT INTO products (name, type, description, how_much_old, price, img1_link, img2_link, img3_link) 
          VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

        // Loop through the products and insert them into the table
        products.forEach(product => {
          db.run(insertDataQuery, [product['name of product'], product['type of product'], product['description'], product['how_much_old'], product['price'], product['img1-link'], product['img2-link'], product['img3-link']], function (err) {
            if (err) {
              console.error(err.message);
            } else {
              console.log(`Product "${product['name of product']}" inserted successfully`);
            }
          });
        });
      }
    });
  }
});

db.get(`SELECT name FROM sqlite_master WHERE type='table' AND name='users'`, (err, row) => {
  if (err) {
    console.error(err.message);
  } else if (row) {
    console.log(`Table users exists in the database`);
  } else {
    console.log(`Table users does not exist in the database`);
    console.log('Entering Data!!');
    // Define the SQL query to create the table users
    const createTableQuery = `CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY,
      name TEXT,
      email TEXT UNIQUE,
      password TEXT,
      college_name TEXT,
      year TEXT
    )`;

    // Execute the SQL query to create the table
    db.run(createTableQuery, [], function (err) {
      if (err) {
        console.error(err.message);
      }
      else {
        console.log('User Table created successfully');
        // Define the SQL query to insert data into the table

        var insertDataQuery = `INSERT INTO users (name, email, password, college_name, year) VALUES (?, ?, ?, ?, ?)`;

        // Loop through the users and insert them into the table
        users.forEach(user => {
          db.run(insertDataQuery, [user['name'], user['email'], user['password'], user['college-name'], user['year']], function (err) {
            if (err) {
              console.error(err.message);
            } else {
              console.log(`User "${user['name']}" inserted successfully`);
            }
          });
        });

      }
    });
  }
});
db.close();

