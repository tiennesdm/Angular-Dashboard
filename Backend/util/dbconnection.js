const mysql = require("mysql");
const db = require("../config/dbproperties");
module.exports = {
  getConnection: () => {
    console.log(db);
    return mysql.createConnection({
      host: db.host,
      user: db.user,
      password: "",
      databse: db.database
    });
  }
};
