import { Router } from "express";
import {
  postUser,

} from "../controllers/user.controllers.js";




const router = Router();


router.post("/",postUser);

export default router;
