import { Router } from "express";
import { DialogsController } from "./../controllers/dialogs.controller";

const router = Router();

router.post("/dialog", DialogsController.createDialog);
router.get("/dialogs", DialogsController.getUserDialogs);

export default router;
