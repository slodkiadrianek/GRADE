"use strict";

import  express  from "express";

const router = express.Router();


import {postDashboard} from '../controllers/pathInfo.js'


import getError from "../controllers/error.js"

router.post("/dashboard", postDashboard);

router.get("/dashboard", getError);

export default router
