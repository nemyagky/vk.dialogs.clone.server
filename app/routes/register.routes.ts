import { Router } from "express";
import { RegisterController } from "../controllers/register.controller";
import { ValidateAuthParams } from "../validators/register/auth.validator";
import { ValidateRegisterParams } from "../validators/register/register.validator";

const router = Router();

router.post("/register", ValidateRegisterParams, RegisterController.register.bind(RegisterController));
router.get("/auth", ValidateAuthParams, RegisterController.auth.bind(RegisterController));

export default router;
