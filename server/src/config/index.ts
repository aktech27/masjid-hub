import "dotenv/config";

const DB_CONFIG = {
  DB_USER: process.env.POSTGRES_USER ?? "postgres",
  DB_PASS: process.env.POSTGRES_PASSWORD as string,
  DB_HOST: process.env.POSTGRES_HOST ?? "127.0.0.1",
  DB_PORT: process.env.POSTGRES_PORT ?? "5432",
  DB_NAME: process.env.POSTGRES_DB ?? "mh-db-dev",
};

const CONSTANTS = {
  ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  DB_URL: `postgresql://${DB_CONFIG.DB_USER}:${DB_CONFIG.DB_PASS}@${DB_CONFIG.DB_HOST}:${DB_CONFIG.DB_PORT}/${DB_CONFIG.DB_NAME}`,
  PWD_SALT_ROUNDS: 12,
} as const;

export default CONSTANTS;
