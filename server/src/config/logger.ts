import winston from "winston";
import CONSTANTS from "./index";

let winstonConfig;
if (CONSTANTS.ENV === "local" || CONSTANTS.ENV === "development") {
  winstonConfig = {
    level: "debug",
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.cli(),
      winston.format.printf(
        (info) => `[${info.timestamp}] ${info.level}: ${info.message}`
      )
    ),
    transports: [new winston.transports.Console()],
  };
} else {
  winstonConfig = {
    level: "info",
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.json()
    ),
    transports: [new winston.transports.Console()],
  };
}
const logger = winston.createLogger(winstonConfig);

export default logger;
