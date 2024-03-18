"use strict";

const express = require("express");

const router = express.Router();

const pathInfo = require("../controllers/pathInfo");

router.get("/todolist", pathInfo.todolistPage);

module.exports = router;