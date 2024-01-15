"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.disconnectDatabase = exports.connectDatabase = void 0;
const mongoose_1 = require("mongoose");
async function connectDatabase() {
    try {
        await (0, mongoose_1.connect)(process.env.MONGODB_URL);
    }
    catch (error) {
        console.log(error);
        throw new Error("Cannot connect to the string");
    }
}
exports.connectDatabase = connectDatabase;
async function disconnectDatabase() {
    try {
        await (0, mongoose_1.disconnect)();
    }
    catch (error) {
        console.log(error);
        throw new Error("Could not disconnect from MongoDB");
    }
}
exports.disconnectDatabase = disconnectDatabase;
//# sourceMappingURL=connection.js.map