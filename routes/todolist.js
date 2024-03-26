"use strict";
import  express  from "express";


const router = express.Router();

import {todolistPage, taskPage, deletePage} from '../controllers/pathInfo.js'



router.get("/todolist", todolistPage);

router.post("/admin/newtask", taskPage);

router.post("/admin/deletetask", deletePage);

export default router