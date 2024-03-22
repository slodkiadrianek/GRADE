"use strict";

const express = require("express");

const router = express.Router();

const pathInfo = require("../controllers/pathInfo");

router.get("/translate", pathInfo.translatePage);

router.post("/admin/translate", pathInfo.translate);

module.exports = router;
