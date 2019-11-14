import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
   name: {
      required: true,
      type: String
   },
   password: {
      required: true,
      type: Number
   },
   surname: {
      required: true,
      type: String
   },
});

export default mongoose.model("User", UserSchema, "users");
