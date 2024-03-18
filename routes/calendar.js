"use strict";

const express = require("express");

const router = express.Router();

const pathInfo = require("../controllers/pathInfo");

router.get("/calendar", pathInfo.calendarPage);

module.exports = router;
