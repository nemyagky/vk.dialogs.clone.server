import { Request, Response } from "express";
import UserSchema from "../models/User";

export class RegisterController {

   // TODO JWT tokens

   // If user doesn't exist - add new user to database
   // Receives name, password
   // Add user into database and return UserSchema
   public static async register(req: Request, res: Response) {
      try {
         // Check if user already exists
         const sameUser = await UserSchema.find({
            name: req.body.name,
            password: req.body.password
         });

         if (!sameUser.length) {
            UserSchema.create({
               name: req.body.name,
               password: req.body.password
            }, (err: any, data: any) => {
               if (err) {
                  res.json(err);
               } else {
                  res.json(data);
               }
            });
         } else {
            res.json({ message: "Пользователь уже существует" });
         }
      } catch (e) {
         res.json(e);
      }
   }

   // Receives name, password
   // Return UserSchema, if user was found
   public static async auth(req: Request, res: Response) {
      try {
         const userData = await UserSchema.find({
            name: req.query.name,
            password: req.query.password
         });

         if (userData) {
            res.json(userData);
         } else {
            res.json({ message: "Пользователь не существует" });
         }
      } catch (e) {
         res.json(e);
      }
   }

}
