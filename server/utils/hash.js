import bcrypt from "bcrypt"

const saltRounds = 10

export async function encrypt(password) {
    const hash  = await bcrypt.hash(password, saltRounds)
    return hash
}
