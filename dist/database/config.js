"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const users_model_1 = require("./models/users.model");
require("dotenv/config");
const connect = () => {
    const hostName = process.env.LOCAL_DB_HOST || process.env.HOST || 'localhost';
    const userName = process.env.LOCAL_DB_USER || process.env.USER || 'localhost';
    const password = ''; //process.env.PASSWORD || '';
    const database = process.env.LOCAL_DB || process.env.DB || '';
    const dialect = process.env.DIALECT || 'postgres';
    const operatorsAliases = 0;
    const sequelize = new sequelize_typescript_1.Sequelize(database, userName, password, {
        host: hostName,
        dialect,
        operatorsAliases,
        repositoryMode: true,
        pool: {
            max: 10,
            min: 0,
            acquire: 20000,
            idle: 5000
        }
    });
    sequelize.addModels([users_model_1.Users]);
    const db = {};
    db.Sequelize = sequelize_typescript_1.Sequelize;
    db.sequelize = sequelize;
    return db;
};
exports.connect = connect;
