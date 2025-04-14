import express from "express";
import CONSTANTS from "./config";
import logger from "./config/logger";
import helmet from "helmet";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

app.listen(CONSTANTS.PORT, () => {
  logger.info(`Server is running: ${CONSTANTS.PORT} || ${CONSTANTS.ENV}`);
});
