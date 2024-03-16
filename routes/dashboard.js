"use strict";

const express = require("express");

const router = express.Router();

const getError = require("../controllers/error");
const pathInfo = require("../controllers/pathInfo");

router.post("/dashboard", pathInfo.postDashboard);

router.get("/dashboard", getError.get404);

module.exports = {
  router: router,
};
