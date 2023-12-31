"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const authRouter_1 = __importDefault(require("./Router/authRouter"));
const taskRouter_1 = __importDefault(require("./Router/taskRouter"));
const main = (app) => {
    app.use(express_1.default.json());
    app.use((0, cors_1.default)());
    app.get("/", (req, res) => {
        try {
            res.status(200).json({
                message: "Welcome Page!!!",
            });
        }
        catch (error) {
            res.status(404).json({
                message: "error",
            });
        }
    });
    app.use("/api/v1/auth", authRouter_1.default);
    app.use("/api/v1/task", taskRouter_1.default);
};
exports.default = main;
