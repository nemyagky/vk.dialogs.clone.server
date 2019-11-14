import { NextFunction, Request, Response } from "express";

export function ValidateAuthParams(req: Request, res: Response, next: NextFunction) {
   const userParams = req.query;
   if (!userParams.name || !userParams.surname || !userParams.password) {
      res.status(400).json({message: "Введенные параметры невалидны"});
   } else {
      next();
   }
}
