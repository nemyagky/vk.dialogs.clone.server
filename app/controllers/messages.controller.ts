import { Request, Response } from "express";
import DialogSchema from "../models/Dialog";
import MessageSchema from "../models/Message";

export class MessageController {

   // Receives dialogId, text and user ID
   // Create new message, return new message
   // TODO update lust message
   public static async addMessage(req: Request, res: Response) {

      try {

         console.log(req.query, 'Пришло');

         MessageSchema.create({
            dialogId: req.query.dialogId,
            isRead: false,
            text: req.query.text,
            usersId: req.query.userId
         }, (err: any, data: any) => {
            if (err) {
               res.json(err);
            } else {

               DialogSchema.findOneAndUpdate({ id: req.query.dialogId }, {
                  lastMessage: {
                     text: req.query.text,
                     userId: req.query.userId
                  }
               }, (err, data) => {
                  console.log(err, data)
               });

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
         MessageSchema.find({ dialogId: req.body.dialogId }, (err, data) => {
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
