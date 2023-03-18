import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  role: String,
  password: {
    type: String,
    required: true,
  },
});

const User = models.Post || model("Post", userSchema);

export default User;
