import User from "../db/models/User.js";

export async function createUser(username, password, email, user_type) {
  try {
    const user = await User.create({
      username,
      password,
      email,
      user_type,
    });
    return user;
  } catch (err) {
    throw new Error(err);
  }
}

export async function getAllUsers() {
  const users = await User.find();
  return users;
}

export async function getUserById(id) {
  const user = await User.findOne({ _id: id });
  return user;
}

export async function deleteById(id) {
  const user = await User.deleteOne({ _id: id });
  return user;
}
