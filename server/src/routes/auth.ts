import { Router } from "express";
import * as authControllers from "@controllers/auth";

const router = Router();

router.post("/onboard-user", authControllers.onboardUserController);

export default router;
