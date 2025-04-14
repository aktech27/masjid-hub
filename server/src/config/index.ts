import dotenv from "dotenv";
dotenv.config();

const CONSTANTS = {
  ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
} as const;

export default CONSTANTS;
