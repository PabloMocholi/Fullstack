import { Router } from "express";
import { getAllInfo, getEmails } from "../controllers/info.controller.js";

const router = Router();


router.get("/main", getAllInfo)
router.get("/emails", getEmails)


export default router