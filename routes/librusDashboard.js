"use strict";

import express from "express";

const router = express.Router();

import {
  librusDashboard,
  gradesPage,
  calendarLibrusPage,
  annoucmentsPage,
  homeworkPage,
  absencesPage,
  messagePage,
  gradePage,
} from "../controllers/pathInfoLibrus.js";

router.post("/librusDashboard", librusDashboard);
router.get("/grades", gradesPage);
router.get("/annoucments", annoucmentsPage);
router.get("/calendarLibrus", calendarLibrusPage);
router.get("/homework", homeworkPage);
router.get("/absences", absencesPage);
router.get("/messages", messagePage);
router.get("/grades/:gradeId", gradePage);

export default router;
