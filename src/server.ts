import dotenv from "dotenv";
import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import { router } from "./routes";
import "./database";

dotenv.config();

const app = express();

app.use(express.json());
app.use(router);
app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof Error)
      return response.status(400).json({ error: error.message });

    return response
      .status(400)
      .json({ error: "error", message: "Internal server error" });
  }
);

const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(`Server runnig on http://localhost:${port}`)
);
