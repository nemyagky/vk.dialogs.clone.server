import { Request, Response } from "express";
import MessageSchema from "../models/Message";

export class MessageController {

   // Receives dialogId, text and user ID
   // Create new message, return new message
   public static async addMessage(req: Request, res: Response) {

      try {

         MessageSchema.create({
            dialogId: req.body.dialogId,
            isReaded: false,
            text: req.body.text,
            usersId: req.body.userId
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
   // Receives dialogId
   // Return array of messages in this dialog
   public static async getMessages(req: Request, res: Response) {

      try {
         MessageSchema.find({dialogId: req.body.dialogId}, (err, data) => {
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

}
