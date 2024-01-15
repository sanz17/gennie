"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const connection_1 = require("./db/connection");
const PORT = process.env.POR || 5000;
(0, connection_1.connectDatabase)().then(() => {
    app_1.default.listen(PORT, () => console.log("Server Open"));
});
app_1.default.listen(5000, () => console.log("Server is live"));
//# sourceMappingURL=index.js.map