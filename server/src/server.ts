import "module-alias/register";
import "dotenv/config";
import http from "http";
import app from "./app";
import db from "@db/index";

import logger from "@config/logger";
import CONSTANTS from "@config/index";

const server = http.createServer(app);

server.listen(CONSTANTS.PORT, async () => {
  logger.info(
    `[${CONSTANTS.ENV}] Server is up and running on port: ${CONSTANTS.PORT}`
  );
});
