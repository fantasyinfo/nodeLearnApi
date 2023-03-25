const express = require("express");
const path = require("path");
const router = express.Router();
const controller = require("../controller/student.js");

router.get("/", controller.homePage);

router.get("/about", controller.aboutPage);

module.exports = router;
