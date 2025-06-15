import bcrypt from "bcrypt";
import crypto from "crypto";
import CONSTANTS from "@/config";

export function generateRandomPassword(length: number = 12): string {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#";
  return Array.from(crypto.randomFillSync(new Uint32Array(length)))
    .map((x) => charset[x % charset.length])
    .join("");
}

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, CONSTANTS.PWD_SALT_ROUNDS);
}

export async function comparePassword(
  plainPassword: string,
  hashedPassword: string
): Promise<boolean> {
  return bcrypt.compare(plainPassword, hashedPassword);
}
