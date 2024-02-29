"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiRouter = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = require("../middleware/auth");
const user_1 = require("../controller/user");
const contact_1 = require("../controller/contact");
const address_1 = require("../controller/address");
exports.apiRouter = express_1.default.Router();
exports.apiRouter.use(auth_1.authMiddleware);
// User APi
exports.apiRouter.get("/api/users/current", user_1.UserController.get);
exports.apiRouter.patch("/api/users/current", user_1.UserController.update);
exports.apiRouter.delete("/api/users/current", user_1.UserController.logout);
// Contact API
exports.apiRouter.post("/api/contacts", contact_1.ContactController.create);
exports.apiRouter.get("/api/contacts/:contactId(\\d+)", contact_1.ContactController.get);
exports.apiRouter.put("/api/contacts/:contactId(\\d+)", contact_1.ContactController.update);
exports.apiRouter.delete("/api/contacts/:contactId(\\d+)", contact_1.ContactController.remove);
exports.apiRouter.get("/api/contacts", contact_1.ContactController.search);
// Address API
exports.apiRouter.post("/api/contacts/:contactId(\\d+)/addresses", address_1.AddressController.create);
exports.apiRouter.get("/api/contacts/:contactId(\\d+)/addresses/:addressId(\\d+)", address_1.AddressController.get);
exports.apiRouter.put("/api/contacts/:contactId(\\d+)/addresses/:addressId(\\d+)", address_1.AddressController.update);
exports.apiRouter.delete("/api/contacts/:contactId(\\d+)/addresses/:addressId(\\d+)", address_1.AddressController.remove);
exports.apiRouter.get("/api/contacts/:contactId(\\d+)/addresses", address_1.AddressController.list);
