"use strict";

import  express  from "express";


const router = express.Router();

import {translatePage, translate} from '../controllers/pathInfo.js'



router.get("/translate", translatePage);

router.post("/admin/translate", translate);

export default router