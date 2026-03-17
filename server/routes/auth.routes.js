import express from "express";
import * as authControllers from "../controllers/auth.controller.js"

const router = express.Router();

router.route("/register/create")
  .post(authControllers.addUser)

router.route("/register/update")
  .put(authControllers.updateUser)

router.route("/register/delete")
  .delete(authControllers.deleteUser)

router.route("/login")
  .post(authControllers.login)

export default router;