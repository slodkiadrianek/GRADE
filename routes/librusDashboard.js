"use strict";

const express = require("express");

const router = express.Router();

const pathInfo = require("../controllers/pathInfo");

router.post("/librusDashboard", pathInfo.librusDashboard);

module.exports = router;
