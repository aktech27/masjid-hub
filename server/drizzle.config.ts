import "dotenv/config";
import { defineConfig } from "drizzle-kit";
import CONSTANTS from "./src/config/index";

export default defineConfig({
  out: "./src/db/migrations",
  schema: "./src/db/schema/index.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: CONSTANTS.DB_URL,
  },
  verbose: true,
  strict: false,
});
