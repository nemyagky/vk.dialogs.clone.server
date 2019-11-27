import mongoose from "mongoose";

// TODO date
const MessageSchema = new mongoose.Schema({
   dialogId: String,
   isRead: Boolean,
   text: String,
   userId: String,
});

export default mongoose.model("Message", MessageSchema, "messages");
