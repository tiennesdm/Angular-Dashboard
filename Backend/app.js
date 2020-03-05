const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
// const db = require("./util/dbconnection");
console.log("hello from app.js");
// const mysql = require("mysql");

// // First you need to create a connection to the database
// // Be sure to replace 'user' and 'password' with the correct values
// const con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "sitepoint"
// });

// con.connect(err => {
//   if (err) {
//     console.log("Error connecting to Db");
//     return;
//   }
//   console.log("Connection established");
// });
// con.query("SELECT * FROM authors", (err, rows) => {
//   if (err) throw err;

//   console.log("Data received from Db:");
//   console.log(rows);
// });
const userRoutes = require("./routes/auth");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});
app.use("/api/user", userRoutes);

app.use((err, req, res, next) => {
  // console.log('error:::,', err);

  res.status(400).send(err.message);
});
module.exports = app;
