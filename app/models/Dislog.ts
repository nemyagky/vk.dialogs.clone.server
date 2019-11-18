import mongoose from "mongoose";

const DialogSchema = new mongoose.Schema({
   lastMessageId: String,
   usersId: [String],
});

export default mongoose.model("Dialog", DialogSchema, "dialogs");
