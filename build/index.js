"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.start = exports.connectSequelize = void 0;
const sequelize_1 = require("sequelize");
const models_1 = require("./models");
const connectSequelize = () => __awaiter(void 0, void 0, void 0, function* () {
    const sequelize = new sequelize_1.Sequelize({
        host: "localhost",
        dialect: "mysql",
        port: 33061,
        username: "root",
        password: "root",
        database: "library",
    });
    yield sequelize.authenticate();
    return sequelize;
});
exports.connectSequelize = connectSequelize;
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sequelize = yield (0, exports.connectSequelize)();
        console.log("Connection has been established successfully.");
        (0, models_1.initModels)(sequelize);
        console.log("Models have been created.");
        return sequelize;
    }
    catch (error) {
        console.error("Unable to connect to the database:", error);
        return null;
    }
});
exports.start = start;
