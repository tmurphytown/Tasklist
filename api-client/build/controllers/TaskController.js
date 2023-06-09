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
exports.deleteTask = exports.updateTask = exports.createTask = exports.getTasks = void 0;
const Task_1 = require("../models/Task");
const getTasks = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let tasks = yield Task_1.Task.findAll();
    res.status(200).json(tasks);
});
exports.getTasks = getTasks;
const createTask = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let newTask = req.body;
    if (newTask.title) {
        let created = yield Task_1.Task.create({ title: newTask.title, completed: false });
        res.status(201).json(created);
    }
    else {
        res.status(400).send();
    }
});
exports.createTask = createTask;
const updateTask = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let taskId = req.params.id;
    let newTask = req.body;
    let taskFound = yield Task_1.Task.findByPk(taskId);
    if (taskFound && taskFound.id == newTask.id
        && newTask.title) {
        yield Task_1.Task.update(newTask, {
            where: { id: taskId }
        });
        res.status(200).json();
    }
    else {
        res.status(400).json();
    }
});
exports.updateTask = updateTask;
const deleteTask = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let taskId = req.params.id;
    let taskFound = yield Task_1.Task.findByPk(taskId);
    if (taskFound) {
        yield Task_1.Task.destroy({
            where: { id: taskId }
        });
        res.status(200).json();
    }
    else {
        res.status(404).json();
    }
});
exports.deleteTask = deleteTask;
