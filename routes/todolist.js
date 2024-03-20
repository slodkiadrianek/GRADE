"use strict";

const express = require("express");

const router = express.Router();

const pathInfo = require("../controllers/pathInfo");

router.get("/todolist", pathInfo.todolistPage);

router.post("/admin/newtask", pathInfo.taskPage);

router.post("/admin/deletetask", pathInfo.deletePage);

module.exports = router;
