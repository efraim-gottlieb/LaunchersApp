import express from "express";
import * as launcherControllers from "../controllers/launcher.controller.js";
import { auth } from "../middlewares/auth.middleware.js";

const router = express.Router();
router.route("/")
  .get(auth ,launcherControllers.launchers)
  .post(auth, launcherControllers.createNewLauncher)

router.route("/{:id}")
  .get(auth, launcherControllers.byId)
  .delete(auth, launcherControllers.deleteLauncher)

router.route("/destroyed/{:id}")
  .put(auth, launcherControllers.setDestroyed)

export default router;