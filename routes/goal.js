import  express  from "express";

const router = express.Router();


import { editGoal, newGoal} from '../controllers/pathInfoDashboard.js'


router.post("/admin/editGoal", editGoal);

router.post("/admin/newGoal", newGoal);

export default router