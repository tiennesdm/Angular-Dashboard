const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
var conn = require("../../util/dbconnection");

//getting the connection object
var connection = conn.getConnection();
console.log(connection);

//connect to database
connection.connect();
exports.createUser = (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then(hash => {
    let username = req.body.username;
    let name = req.body.fullName;
    let password = hash;

    connection.query(
      "insert into login values(" +
        name +
        ",'" +
        username +
        "', " +
        password +
        ")",
      function(err, result) {
        if (err) {
          console.log(err);
          res.status(500).json({
            message: "Invalid authentication credentials!"
          });
        } else {
          res.status(201).json({
            message: "User created!",
            result: result
          });
        }
      }
    );
  });
};

// exports.userLogin = (req, res, next) => {
//   let fetchedUser;
//   User.findOne({ username: req.body.username })
//     .then(user => {
//       if (!user) {
//         return res.status(401).json({
//           message: "Auth failed"
//         });
//       }
//       fetchedUser = user;
//       return bcrypt.compare(req.body.password, user.password);
//     })
//     .then(result => {
//       if (!result) {
//         return res.status(401).json({
//           message: "Auth failed"
//         });
//       }
//       const token = jwt.sign(
//         { username: fetchedUser.username, userId: fetchedUser._id },
//         "shubham_mehta",
//         { expiresIn: "1h" }
//       );
//       res.status(200).json({
//         token: token,
//         expiresIn: 3600,
//         userId: fetchedUser._id,
//         userName: fetchedUser.fullName
//       });
//     })
//     .catch(err => {
//       return res.status(401).json({
//         message: "Invalid authentication credentials!"
//       });
//     });
// };
