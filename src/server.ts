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

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  next();
});

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof Error)
      return response.status(400).json({ error: error.message });

    return response
      .status(400)
      .json({ error: "error", message: "Internal server error" });
  }
);

app.listen(process.env.PORT || 3000, () => console.log("🏃 Running Server"));
function cors(arg0: { origin: string }): any {
  throw new Error("Function not implemented.");
}
