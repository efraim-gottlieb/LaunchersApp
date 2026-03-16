import express from "express";
import * as launcherControllers from "../controllers/launcher.controller.js";

const router = express.Router();
router.route("/")
  .get(launcherControllers.launchers)
  .post(launcherControllers.createNewLauncher)



export default router;