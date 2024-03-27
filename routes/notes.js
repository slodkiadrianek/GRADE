"use strict";
import  express  from "express";



import {addToSheet, showSheet, newSheet} from '../controllers/pathInfoDashboard.js'

const router = express.Router();




router.post("/admin/addToSheet", addToSheet);
router.post("/admin/showSheet", showSheet);
router.post("/admin/newSheet", newSheet);

export default router