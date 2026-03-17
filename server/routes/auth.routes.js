import express from "express";
import * as authControllers from "../controllers/auth.controller.js"
import { auth, authAdmin } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.route("/register")
  .get(auth,authAdmin, authControllers.users)
  .post(auth, authAdmin, authControllers.addUser)
  
router.route("/register/:id")
  .delete(auth, authAdmin, authControllers.deleteUser)
  .put(auth, authAdmin, authControllers.updateUser)


router.route("/login")
  .post(authControllers.login)

router.route("/getUser")
  .get(auth ,authControllers.profile)

export default router;