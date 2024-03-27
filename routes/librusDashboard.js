"use strict";

import express from "express";

const router = express.Router();

import {
  librusDashboard,
  gradePage,
  calendarLibrusPage,
  annoucmentsPage,
  homeworkPage,
  absencesPage,
  messagePage,
} from "../controllers/pathInfoLibrus.js";

router.post("/librusDashboard", librusDashboard);
router.get("/grades", gradePage);
router.get("/annoucments", annoucmentsPage);
router.get("/calendarLibrus", calendarLibrusPage);
router.get('/homework', homeworkPage)
router.get('/absences', absencesPage)
router.get('/messages', messagePage)

export default router;
