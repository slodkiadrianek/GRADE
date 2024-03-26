"use strict";

import  express  from "express";

const router = express.Router();


import {librusDashboard, gradePage, calendarLibrusPage, annoucmentsPage} from '../controllers/pathInfo.js'



router.post("/librusDashboard" , librusDashboard);
router.get('/grades', gradePage)
router.get('/annoucments',annoucmentsPage )
router.get('/calendarLibrus', calendarLibrusPage)

export default router