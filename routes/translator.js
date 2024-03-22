"use strict";

const express = require("express");

const router = express.Router();

const pathInfo = require("../controllers/pathInfo");

router.get("/translate", pathInfo.translatePage);

module.exports = router;
