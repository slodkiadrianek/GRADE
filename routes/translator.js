"use strict";

import  express  from "express";


const router = express.Router();

import { translate} from '../controllers/pathInfoDashboard.js'




router.post("/admin/translate", translate);

export default router