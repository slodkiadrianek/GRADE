const express = require("express");

const router = express.Router();

const pathInfo = require("../controllers/pathInfo");

router.use("/librus", pathInfo.librusPage);

module.exports = router;
