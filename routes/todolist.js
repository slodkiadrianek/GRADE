"use strict";
import  express  from "express";


const router = express.Router();

import { taskPage, deletePage} from '../controllers/pathInfoDashboard.js'




router.post("/admin/newtask", taskPage);

router.post("/admin/deletetask", deletePage);

export default router