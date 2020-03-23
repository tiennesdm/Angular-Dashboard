const express = require("express");

const videoController = require("../controller/VideoStream");
const Middleware = require("../middleware/check-auth");

const router = express.Router();

router.get("/videoPlayer/:videoName", videoController.getVideoStream);
module.exports = router;