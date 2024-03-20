"use strict";

const express = require("express");

const router = express.Router();

const pathInfo = require("../controllers/pathInfo");

router.get("/", pathInfo.landingPage);

router.get("/logowanie", pathInfo.loginPage);

module.exports = router;
