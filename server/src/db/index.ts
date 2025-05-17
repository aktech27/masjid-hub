import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import CONSTANTS from "@config/index";

export const pool = new Pool({
  connectionString: CONSTANTS.DB_URL!,
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 5000,
});

export const db = drizzle({ client: pool, logger: true });

export default db;
