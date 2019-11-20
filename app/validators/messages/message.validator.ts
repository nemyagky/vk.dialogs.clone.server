import { NextFunction, Request, Response } from "express";

export function ValidateMessageParams(req: Request, res: Response, next: NextFunction) {
   if (!req.body.dialogId || !req.body.text || !req.body.userId) {
      res.status(400).json({message: "Отсутствуют обязательные для сообщения данные"});
   } else {
      next();
   }
}
