"use strict";

const express = require("express");

const router = express.Router();

const pathInfo = require("../controllers/pathInfo");

router.get("/calendar", pathInfo.calendarPage);

router.post("/admin/previous", pathInfo.previous);

router.post("/admin/next", pathInfo.next);

router.post('/admin/event', pathInfo.eventPage)

router.post('/admin/deleteEvent', pathInfo.deleteEvent)

module.exports = router;
