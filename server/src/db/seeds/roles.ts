import roleData from "./data/roles.json";
import { roles } from "@schema/index";
import { db } from "@db/index";

export default async function seed() {
  await db.insert(roles).values(roleData);
}
