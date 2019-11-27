import { Router } from "express";
import { MessageController } from "./../controllers/messages.controller";
import { ValidateMessageParams } from "./../validators/messages/message.validator";

const router = Router();

// TODO delete this
router.post("/message", ValidateMessageParams, MessageController.addMessage);

export default router;
