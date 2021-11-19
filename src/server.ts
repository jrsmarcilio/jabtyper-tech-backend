import dotenv from "dotenv";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import cors from "cors";
import "reflect-metadata";

import { router } from "./routes";
import "./database";

dotenv.config();

const app = express();

app.use(cors);
app.use(cors({ origin: "*" }));
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

app.listen(process.env.PORT || 5000, () =>
  console.log(`🏃 Running Server as ${process.env.PORT || 5000}`)
);
