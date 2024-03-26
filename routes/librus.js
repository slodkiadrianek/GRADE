import  express  from "express";

const router = express.Router();


import {librusPage} from '../controllers/pathInfo.js'



router.use("/librus", librusPage);

export default router