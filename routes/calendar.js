"use strict";

import  express  from "express";


const router = express.Router();

import {calendarPage, previous, next,  eventPage, deleteEvent} from '../controllers/pathInfo.js'



router.get("/calendar", calendarPage);

router.post("/admin/previous", previous);

router.post("/admin/next", next);

router.post('/admin/event', eventPage)

router.post('/admin/deleteEvent', deleteEvent)

export default router