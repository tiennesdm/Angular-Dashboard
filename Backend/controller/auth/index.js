const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
let con = require("../../util/dbconnection");

// //getting the connection object
con.getConnection().connect(err => {
  if (err) {
    console.log("Error connecting to Db");
    return;
  }
  console.log("Connection established");
});

exports.createUser = (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then(hash => {
    let username = req.body.username;
    let name = req.body.fullName;
    let password = hash;
    let query = `INSERT into login (name,username ,password) VALUES ('${name}', '${username}', '${password}')`;
    //  let query = `Select * FROM authors`;
    con.getConnection().query(query, (err, rows) => {
      if (err) {
        console.log(err);
        res.status(500).json({
          message: "Invalid authentication credentials!"
        });
      } else {
        res.status(201).json({
          message: "User created!",
          result: rows
        });
      }

      console.log("Data received from Db:");
      console.log(rows);
    });
  });
};

exports.userLogin = (req, res, next) => {
  let fetchedUser;
  let bcryptUser;
  let query1 = `SELECT userid,username,password,name FROM login where username='${req.body.username}'`;
  con.getConnection().query(query1, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).json({
        message: "Invalid authentication credentials!"
      });
    } else {
      // fetchedUser = user;
      console.log(rows);
      if (bcrypt.compare(req.body.password, rows[0].password)) {
        const token = jwt.sign(
          { username: rows[0].username, userId: rows[0].userid },
          "shubham_mehta",
          { expiresIn: "10h" }
        );
        res.status(200).json({
          token: token,
          expiresIn: 3600,
          userId: rows[0].userid,
          userName: rows[0].name
        });
      } else {
        return res.status(401).json({
          message: "Invalid authentication credentials!"
        });
      }
    }

    console.log("Data received from Db:");
    console.log(rows);
  });
};