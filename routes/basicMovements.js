"use strict";

import  express  from "express";


const router = express.Router();

import {landingPage, loginPage, forgottenPasswordPage} from '../controllers/pathInfo.js'


router.get("/", landingPage);

router.get("/logowanie", loginPage);

router.get('/forgottenPassword', forgottenPasswordPage)

export default router