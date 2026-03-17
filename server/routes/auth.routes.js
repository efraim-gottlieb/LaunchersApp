import express from "express";
import * as authControllers from "../controllers/auth.controller.js"
import { auth, authAdmin } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.route("/register/create")
  .post(authAdmin, authControllers.addUser)

router.route("/register/update")
  .put(authAdmin, authControllers.updateUser)

router.route("/register/delete")
  .delete(authAdmin, authControllers.deleteUser)

router.route("/login")
  .post(authControllers.login)

router.route("/getUser")
  .get(auth ,authControllers.profile)

export default router;