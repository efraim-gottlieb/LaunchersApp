import { User } from "../db/models/User.js";
import {
  createUser,
  deleteById,
  getAllUsers,
  getUserById,
} from "../services/user.service.js";

import { compare } from "../utils/hash.js";
import { generateToken } from "../utils/token.js";

export async function addUser(req, res) {
  const { username, password, email, user_type } = req.body;
  const users = await getAllUsers();
  const typeUserExists = users.filter((u) => u.user_type == user_type).length;
  if (typeUserExists) {
    return res.send(`User with type : ${user_type} already exists !`);
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
  const user = await deleteById(id);
  if (user) return res.json(user);
  res.status(404).send("user not found");
}

export async function updateUser(req, res) {
  const { id } = req.params;
  const { username, password, email, user_type } = req.body;
  const user = await getUserById(id);
  if (!user) {
    return res.status(404).send("user not found");
  }
  const updatedUser = await User.findByIdAndUpdate(
    id,
    {
      $set: {
        username,
        password,
        email,
        user_type,
      },
    },
    { new: true },
  );
  res.json(updatedUser);
}

export async function login(req, res) {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(403).end("Unauthorized !");
  }
  const isMatch = await compare(password, user.password);
  if (!isMatch) {
    return res.status(403).end("Unauthorized !");
  }
  await User.findByIdAndUpdate(user._id, {
    $set: {
      last_login: Date.now(),
    },
  });
  res.json({
    username: user.username,
    role: user.user_type,
    token: generateToken(JSON.stringify(user)),
  });
}

export async function profile(req, res) {
  try {
    const { username, email, user_type, last_login, _id } = req.user;
    return res.json({ username, email, user_type, last_login, _id });
  } catch {
    res.status(403).end("Unauthorized !");
  }
}
