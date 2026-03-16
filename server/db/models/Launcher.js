import mongoose from "mongoose";
import { generateId } from "../../utils/idGenerator.js";

const launcherSchhema = new mongoose.Schema({
  id: { type: Number, required: true, default: generateId() },
  name: { type: String, required: true },
  city: { type: String },
  rocketType: { type: String },
  latitude: { type: Number },
  longitude: { type: Number },
});

export const Launcher = mongoose.model("Launcher", launcherSchhema);
