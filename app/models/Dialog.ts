import mongoose from "mongoose";

// TODO last message
// TODO user data

// Contains users data + last message, Last message updates every new message

// У нас есть база данных юзеров. Используется при авторизации
// Во время создания нового диалога берутся данные из этой бд и добавляются в диалог
// Данные - фотки изеров, ФИО юзеров, айдишники
// Последнее сообщение хранит в себе текст, дату и айдишник юзера. По  айдишнику получаем фотку и тд
const DialogSchema = new mongoose.Schema({
  lastMessage: {
    text: String,
    userId: String,
  },
  users: [{
    id: String,
    name: String,
  }],
});

export default mongoose.model("Dialog", DialogSchema, "dialogs");
