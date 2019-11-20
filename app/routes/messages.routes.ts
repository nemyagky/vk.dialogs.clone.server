import { Router } from "express";
import { MessageController } from "./../controllers/messages.controller";
import { ValidateMessageParams } from "./../validators/messages/message.validator";

const router = Router();

router.post("/message", ValidateMessageParams, MessageController.addMessage);
router.get("/messages", MessageController.getMessages);

export default router;
