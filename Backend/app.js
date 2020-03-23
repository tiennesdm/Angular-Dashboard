const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const db = require("./util/dbconnection");
console.log("hello from app.js");
//const userRoutes = require("./routes/auth");
//const productRoutes = require("./routes/product");
const videoRoutes = require("./routes/videoStream");



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
//app.use("/api/user", userRoutes);
//app.use("/api/product", productRoutes);
app.use("/api/", videoRoutes);

app.use((err, req, res, next) => {
    // console.log('error:::,', err);

    res.status(400).send(err.message);
});
module.exports = app;