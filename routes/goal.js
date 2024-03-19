const express = require('express')

const router = express.Router()

const pathInfo = require("../controllers/pathInfo");

router.use("/goal", pathInfo.goalPage);

module.exports = router