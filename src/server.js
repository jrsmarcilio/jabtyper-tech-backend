"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const cors_1 = __importDefault(require("cors"));
require("reflect-metadata");
const routes_1 = require("./routes");
require("./database");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(cors_1.default);
app.use((0, cors_1.default)({ origin: "*" }));
app.use(express_1.default.json());
app.use(routes_1.router);
app.use((error, request, response, next) => {
    if (error instanceof Error)
        return response.status(400).json({ error: error.message });
    return response
        .status(400)
        .json({ error: "error", message: "Internal server error" });
});
app.listen(process.env.PORT || 5000, () => console.log(`🏃 Running Server as ${process.env.PORT || 5000}`));
