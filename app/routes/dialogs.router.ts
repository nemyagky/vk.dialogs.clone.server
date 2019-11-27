import { Router } from "express";
import { DialogsController } from "./../controllers/dialogs.controller";

const router = Router();

router.post("/dialog", DialogsController.createDialog.bind(DialogsController));
router.get("/dialogs", DialogsController.getUserDialogs);
router.get("/messages", DialogsController.getMessagesInDialog);

export default router;
