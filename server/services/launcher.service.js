import { Launcher } from "../db/models/Launcher.js";

export async function createLauncher(name,city,rocketType,latitude,longitude) {
  try {
    const launcher = await Launcher.create({
      name,
      city,
      rocketType,
      latitude,
      longitude,
    });
    return launcher
  } catch (err) {
    throw new Error(err);
  }
}

export async function getAllLaunchers() {
  const launchers = await Launcher.find();
  return launchers
}
