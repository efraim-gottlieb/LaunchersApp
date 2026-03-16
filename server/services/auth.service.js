import { User } from "../db/models/User.js";
import { encrypt } from "../utils/hash.js";

export async function getUsers() {
  const users = await User.find().lean();
  return users;
}

export async function createUser(agentCode, fullName, role) {
  const count = await User.countDocuments();
  const id = count + 1;
  const user = await User.create({
    id,
    agentCode,
    fullName,
    role,
    password: await encrypt(fullName),
  });
  return { newUser: user, defaultePassword: fullName };
}
