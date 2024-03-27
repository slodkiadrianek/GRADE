"use strict";

import  express  from "express";

const router = express.Router();


import {translatePage,todolistPage,notesPage, postDashboard, calendarPage, goalPage,librusPage} from '../controllers/pathInfoDashboard.js'


import getError from "../controllers/error.js"

router.post("/dashboard", postDashboard);

router.get("/calendar", calendarPage);

router.use("/goal", goalPage);

router.use("/librus", librusPage);

router.use("/notes", notesPage);

router.get("/todolist", todolistPage);

router.get("/translate", translatePage);

router.get("/dashboard", getError);

export default router
