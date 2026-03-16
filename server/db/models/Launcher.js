import mongoose from "mongoose";

const launcherSchhema = new mongoose.Schema({
  name: { type: String, required: true },
  city: { type: String },
  rocketType: { type: String },
  latitude: { type: Number },
  longitude: { type: Number },
});

export const Launcher = mongoose.model("Launcher", launcherSchhema);
