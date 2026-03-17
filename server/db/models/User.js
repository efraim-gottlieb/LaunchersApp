import mongoose from "mongoose";

const userSchhema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String },
  user_type: { type: String },
  last_login: { type: Date || null, default: null },
});

export const Launcher = mongoose.model("User", userSchhema);
