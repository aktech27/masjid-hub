import express, { Request, Response } from "express";
import helmet from "helmet";
import logger from "@config/logger";
import CONSTANTS from "@config/index";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

app.get("/health-check", (req: Request, res: Response) => {
  try {
    logger.debug(`Health Check :: Called`);
    res.status(200).json({
      message: "Server is healthy",
      pid: process.pid,
      uptime: process.uptime(),
      env: CONSTANTS.ENV,
    });
  } catch (error) {
    logger.error(`Error in Health Check`);
    logger.error(error);
  }
});

export default app;
