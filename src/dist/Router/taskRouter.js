"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const taskController_1 = require("../Controller/taskController");
const router = (0, express_1.Router)();
router.route("/:userId/create-task").post(taskController_1.createTask);
router.route("/view-all-task").get(taskController_1.viewTask);
router.route("/:id/view-one-task").get(taskController_1.viewOneTask);
router.route("/:id/update-task").patch(taskController_1.updateTask);
router.route("/:id/delete-task").delete(taskController_1.deleteTask);
exports.default = router;