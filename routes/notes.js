"use strict";
import  express  from "express";



import {notesPage,addToSheet, showSheet, newSheet} from '../controllers/pathInfo.js'

const router = express.Router();


router.use("/notes", notesPage);


router.post("/admin/addToSheet", addToSheet);
router.post("/admin/showSheet", showSheet);
router.post("/admin/newSheet", newSheet);

export default router