const express = require("express");

const router = express.Router();

const pathInfo = require("../controllers/pathInfo");

router.use("/goal", pathInfo.goalPage);

router.post("/admin/editGoal", pathInfo.editGoal);

router.post("/admin/newGoal", pathInfo.newGoal);

module.exports = router;
