"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../controller/user");
exports.publicRouter = express_1.default.Router();
exports.publicRouter.post("/api/users", user_1.UserController.register);
exports.publicRouter.post("/api/users/login", user_1.UserController.login);
