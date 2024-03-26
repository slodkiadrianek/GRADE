import  express  from "express";

const router = express.Router();


import {goalPage, editGoal, newGoal} from '../controllers/pathInfo.js'

router.use("/goal", goalPage);

router.post("/admin/editGoal", editGoal);

router.post("/admin/newGoal", newGoal);

export default router