import { createLauncher, getAllLaunchers } from "../services/launcher.service.js";


export async function createNewLauncher(req, res) {
  const {name, city, rocketType, latitude, longitude} = req.body;
  const launcher = await createLauncher(name, city, rocketType, latitude, longitude);
  res.status(201).json(launcher);
}

export async function launchers(req, res) {
  const launchers = await getAllLaunchers()
  res.status(200).json(launchers);
}