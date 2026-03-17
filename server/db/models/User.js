import mongoose from "mongoose";

const userSchhema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: email },
  user_type: { type: String },
  last_login: { type: Date, default: Date.now },
});

export const Launcher = mongoose.model("User", userSchhema);
