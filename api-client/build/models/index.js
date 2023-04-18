"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const sequelize_1 = require("sequelize");
const Task_1 = require("./Task");
const dbName = 'taskManager';
const username = 'root';
const password = 'root';
const sequelize = new sequelize_1.Sequelize(dbName, username, password, {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});
(0, Task_1.TaskFactory)(sequelize);
exports.db = sequelize;
