import { body } from "express-validator";
import { sendErrorIfExist } from "../sendErrorIfExist";

export const registerValidator = [
   body("name").exists().withMessage("Не указано имя пользователя")
      .isLength({ max: 20 }).withMessage("Имя не может содержать больше 20 символов")
      .matches(/^[а-яА-ЯёЁa-zA-Z]+$/).withMessage("Имя может содержать только русские и английские буквы!"),
   body("password").exists().withMessage("Не указан пароль пользователя")
      .isLength({ min: 6, max: 40 }).withMessage("Пароль может содержать от 6 до 40 символов"),
   sendErrorIfExist
];
