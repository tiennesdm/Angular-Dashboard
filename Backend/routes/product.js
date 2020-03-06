const express = require("express");

const ProductController = require("../controller/Product");
const Middleware = require("../middleware/check-auth");

const router = express.Router();

router.get("/getProduct", Middleware, ProductController.GetProduct);
module.exports = router;
