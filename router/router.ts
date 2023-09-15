import { Router } from "express";
import personRouter from "./person-router";

const router = Router();

router.use(personRouter);

export default router;