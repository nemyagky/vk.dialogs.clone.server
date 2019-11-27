import { Request, Response } from "express";

import DialogSchema from "../models/Dialog";
import MessageSchema from "../models/Message";
import UserSchema from "../models/User";

export class DialogsController {

   // TODO test with wrong data
   // TODO add checking if dialog exist
   // Receives usersId and last message
   // Create new dialog, return new dialog
   public static async createDialog(req: Request, res: Response) {
      try {
         const usersData = await this.getUsers(req.body.usersId);

         DialogSchema.create({
            lastMessage: req.body.lastMessage,
            users: usersData,
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
   // TODO checking if req data is empty
   // Receives userID
   // Return dialogs array (DialogSchema.users will not contains current user data)
   public static async getUserDialogs(req: Request, res: Response) {

      try {

         // TODO change all req.body to req.query
         DialogSchema.find({ "users._id": req.query.userId }, (err, data: any) => {

            if (err) {
               res.json(err);
            } else {

               data.forEach((dialog: any) => {
                  dialog.users = dialog.users.filter((user: any) => user._id.toString() !== req.query.userId);
               });

               res.json(data);
            }
         });

      } catch (e) {
         res.json(e);
      }

   }

   public static async getMessagesInDialog(req: Request, res: Response) {
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

   // Receives usersId array
   // Return usersData array
   private static getUsers(usersId: [string]) {

      try {
         return new Promise((resolve) => {
            const usersData: any[] = [];

            usersId.forEach((userId: string, id: number) => {
               UserSchema.findById(userId, (err, userData) => {
                  usersData.push(userData);
                  if (id === usersId.length - 1) {
                     resolve(usersData);
                  }
               });
            });

         });
      } catch (e) {
         // TODO test this string
         console.log(e);
         throw e;
      }
   }

}
