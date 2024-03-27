"use strict";

import  express  from "express";


const router = express.Router();

import { previous, next,  eventPage, deleteEvent} from '../controllers/pathInfoDashboard.js'




router.post("/admin/previous", previous);

router.post("/admin/next", next);

router.post('/admin/event', eventPage)

router.post('/admin/deleteEvent', deleteEvent)

export default router