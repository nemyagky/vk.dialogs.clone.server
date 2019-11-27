import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

// This file is using in every validator to send error. If error doesn't exist - next()
export function sendErrorIfExist(req: Request, res: Response, next: NextFunction) {
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
   } else {
      next();
   }
}
