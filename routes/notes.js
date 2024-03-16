"use strict";
const express = require("express");

const router = express.Router();

const pathInfo = require("../controllers/pathInfo");

router.use("/notes", pathInfo.notesPage);

module.exports = router;
