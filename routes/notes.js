"use strict";
const express = require("express");

const router = express.Router();

const pathInfo = require("../controllers/pathInfo");

router.use("/notes", pathInfo.notesPage);

// router.post('/admin/newText', pathInfo.newText)

router.post('/admin/newSheet' , pathInfo.newSheet)

module.exports = router;
