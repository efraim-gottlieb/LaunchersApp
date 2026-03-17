import { verifyToken } from "../utils/token.js";

export async function auth(req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const user = verifyToken(token);
    if (!user) return res.status(403).send("unaothorized !");
    req.user = user;
    next();
  } catch {
    return res.status(403).send("unaothorized !");
  }
}

export async function authAdmin(req, res, next) {
  req.user.user_type == "admin" ? next() : res.status(403).send("unaothorized !");
}