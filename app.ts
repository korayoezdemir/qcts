import express, { Express, Request, Response, NextFunction } from "express";
import templateRoutes from "./src/api/routes/templateRoute";
import winston from "winston";

const app: Express = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "logs.log" }),
  ],
});

app.use((req: Request, res: Response, next: NextFunction) => {
  logger.info(`Received ${req.method} request for ${req.url}`);
  next();
});

app.use("/api/templates", templateRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  logger.error(`Error: ${err.message}`, {
    method: req.method,
    url: req.url,
    errorStack: err.stack,
  });
  res.status(500).send("Something broke!");
});

app.listen(PORT, () => {
  console.log(`Server runs on port ${PORT}`);
});
