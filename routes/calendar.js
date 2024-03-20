"use strict";

const express = require("express");

const router = express.Router();

const pathInfo = require("../controllers/pathInfo");

router.get("/calendar", pathInfo.calendarPage);

router.post("/admin/previous", pathInfo.previous);

router.post("/admin/next", pathInfo.next);

module.exports = router;
