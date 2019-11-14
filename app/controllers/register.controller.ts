import { Request, Response } from "express";
import UserSchema from "../models/User";

export class RegisterController {

   // If user doesn't exist - add new user to database
   public static async register(req: Request, res: Response) {

      try {
         const user = await this.getUser(req.body.name, req.body.surname, req.body.password);

         if (user === false) {
            const userSchema = new UserSchema({
               name: req.body.name,
               password: req.body.password,
               surname: req.body.surname
            });

            // save() add new user into database
            userSchema.save().then((data) => {
               res.json(data);
            }).catch((err) => {
               res.json({err});
            });
         } else {
            res.json({message: "Пользователь уже существует"});
         }

      } catch (e) {
         res.json(e);
      }

   }

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
         // This string needs test
         console.log(e);
         throw e;
      }
   }

}
