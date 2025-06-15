import { Table, getTableName, sql } from "drizzle-orm";
import { db, pool } from "@db/index";
import { roles } from "@schema/index";
import roleSeed from "./seeds/roles";

const SEEDING_TABLES = [roles];

async function resetTable(table: Table) {
  return db.execute(
    sql.raw(`TRUNCATE TABLE ${getTableName(table)} RESTART IDENTITY CASCADE`)
  );
}

async function startSeeding() {
  for (const table of SEEDING_TABLES) {
    await resetTable(table);
  }

  await roleSeed();

  await pool.end();
}

startSeeding().catch((err) => {
  console.error(err);
});
