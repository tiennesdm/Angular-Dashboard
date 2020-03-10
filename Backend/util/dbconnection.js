const mysql = require("mysql");
const db = require("../config/dbproperties");
module.exports = {
  getConnection: () => {
    console.log(db);
    return mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "ecommerce",
      multipleStatements: true
    });
  }
};
