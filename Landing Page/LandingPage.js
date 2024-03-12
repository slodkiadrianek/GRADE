"use strict";

const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.sendFile("landingPage.html", { root: "Landing Page" });
});

module.exports = router;
