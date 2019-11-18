import { Request, Response } from "express";
import DialogSchema from "../models/Dislog";

export class DialogsController {

   // Receives usersId
   // Create new dialog, return new dialog
   public static async createDialog(req: Request, res: Response) {

      try {

         DialogSchema.create({
            usersId: ["5dcecfa3697639243471b83e", "5dcecfc0697639243471b83f"]
         }, (err: any, data: any) => {
            if (err) {
               res.json(err);
            } else {
               res.json(data);
            }
         });

      } catch (e) {
         res.json(e);
      }

   }

   // TODO pagination
   // Receives userID
   // Return dialogs array
   public static async getUserDialogs(req: Request, res: Response) {

      console.log(req.body);
      try {

         DialogSchema.find({usersId: req.body.userId}, (err, data) => {
            if (err) {
               res.json(err);
            } else {
               res.json(data);
            }
         });

      } catch (e) {
         res.json(e);
      }

   }

   public static async getMessagesInDialog(req: Request, res: Response) {
      try {

         const dialogId = req.body.dialogId;

      } catch (e) {
         res.json(e);
      }
   }

}
