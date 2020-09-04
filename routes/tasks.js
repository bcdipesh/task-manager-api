const express = require("express");
const router = express.Router({ mergeParams: true });
const {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks");

router.route("/").get(getTasks).post(createTask).delete(deleteTask);
router.route("/:taskId").get(getTask).patch(updateTask);

module.exports = router;
