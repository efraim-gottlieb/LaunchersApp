import express from "express";
import * as authControllers from "../controllers/auth.controller.js"
import { auth, authAdmin } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.route("/register/create")
  .post(auth, authAdmin, authControllers.addUser)

router.route("/register/update")
  .put(auth, authAdmin, authControllers.updateUser)

router.route("/register/delete")
  .delete(auth, authAdmin, authControllers.deleteUser)

router.route("/register/users")
  .get(auth,authAdmin, authControllers.users)

router.route("/login")
  .post(auth,authControllers.login)

router.route("/getUser")
  .get(auth ,authControllers.profile)

export default router;