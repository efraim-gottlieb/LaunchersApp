import {
  createUser,
  deleteById,
  getAllUsers,
  getUserById,
} from "../services/user.service.js";

export async function addUser(req, res) {
  const { username, password, email, user_type } = req.body;
  const users = await getAllUsers();
  const typeUserExists = users.filter((u) => u.user_type == user_type).length;
  if (typeUserExists) {
    return res.send(`User with type :${user_type} already exists !`);
  }
  const user = await createUser(username, password, email, user_type);
  res.status(201).json(user);
}

export async function users(req, res) {
  const users = await getAllUsers();
  res.status(200).send(users);
}

export async function byId(req, res) {
  const { id } = req.params;
  const user = await getUserById(id);
  if (user) return res.json(user);
  res.status(404).send("user not found");
}

export async function deleteUser(req, res) {
  const { id } = req.params;
  const launcher = await deleteById(id);
  if (launcher) return res.json(launcher);
  res.status(404).send("launcher not found");
}

export async function updateUser(req, res) {}

export async function login(req, res) {}
