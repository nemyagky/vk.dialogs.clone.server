import { Request, Response } from "express";
import UserSchema from "../models/User";

export class RegisterController {

   // If user doesn't exist - add new user to database
   // Receives name, surname, password
   // Add user into database and return UserSchema
   public static async register(req: Request, res: Response) {

      try {
         const user = await this.getUser(req.body.name, req.body.surname, req.body.password);

         if (user === false) {

            UserSchema.create({
               name: req.body.name,
               password: req.body.password,
               surname: req.body.surname
            }, (err: any, data: any) => {
               if (err) {
                  res.json(err);
               } else {
                  res.json(data);
               }
            });

         } else {
            res.json({message: "Пользователь уже существует"});
         }

      } catch (e) {
         res.json(e);
      }

   }

   // Receives name, surname, password
   // Return UserSchema, if user was found
   public static async auth(req: Request, res: Response) {
      try {
         const user = await this.getUser(req.query.name, req.query.surname, req.query.password);
         if (user) {
            res.json(user);
         } else {
            res.json({message: "Пользователь не найден!"});
         }
      } catch (e) {
         res.json(e);
      }
   }

   // Receives name, surname, password
   // Return UserSchema, if user was found
   public static async getUser(name: string, surname: string, password: string) {
      try {
         // user will contain an array of users data;
         const user = await UserSchema.find({name, surname, password});
         if (user.length) {
            return user;
         } else {
            // Users didn't found
            return false;
         }
      } catch (e) {
         // TODO test this string
         console.log(e);
         throw e;
      }
   }

}
