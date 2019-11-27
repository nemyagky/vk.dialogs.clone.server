import { Router } from "express";
import { RegisterController } from "../controllers/register.controller";
import { authValidator } from "../validators/register/auth.validator";
import { registerValidator } from "../validators/register/register.validator";

const router = Router();

router.post("/register", registerValidator, RegisterController.register.bind(RegisterController));
router.get("/auth", authValidator, RegisterController.auth.bind(RegisterController));

export default router;
