import {
  createLauncher,
  getAllLaunchers,
  getLauncherById,
  deleteById,
  setLauncherDestroyed,
} from "../services/launcher.service.js";

export async function createNewLauncher(req, res) {
  if (!["modiin", "admin"].includes(req.user.user_type)) {
    return res.status(403).end("Unauthorized !");
  }

  const { name, city, rocketType, latitude, longitude } = req.body;
  const launcher = await createLauncher(
    name,
    city,
    rocketType,
    latitude,
    longitude,
  );
  res.status(201).send(launcher);
}

export async function launchers(req, res) {
  const launchers = await getAllLaunchers();
  res.status(200).send(launchers);
}

export async function byId(req, res) {
  const { id } = req.params;
  const launcher = await getLauncherById(id);
  if (launcher) return res.json(launcher);
  res.status(404).send("launcher not found");
}

export async function deleteLauncher(req, res) {
  if (!["modiin", "admin"].includes(req.user.user_type)) {
    return res.status(403).end("Unauthorized !");
  }
  
  const { id } = req.params;
  const launcher = await deleteById(id);
  if (launcher) return res.json(launcher);
  res.status(404).send("launcher not found");
}

export async function setDestroyed(req, res) {
  if (!["modiin", "admin"].includes(req.user.user_type)) {
    return res.status(403).end("Unauthorized !");
  }
  
  const { id } = req.params;
  const launcher = await setLauncherDestroyed(id);
  if (launcher) return res.json(launcher);
  res.status(404).send("launcher not found");
}