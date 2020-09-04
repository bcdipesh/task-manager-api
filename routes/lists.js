const express = require("express");
const router = express.Router();
const {
  getLists,
  postList,
  updateList,
  deleteList,
} = require("../controllers/lists");

// Include other resource routers
const tasksRouter = require("./tasks");

// Re-route into other resource routers
router.use("/:listId/tasks", tasksRouter);
router.use("/:listId/tasks/:taskId", tasksRouter);

router.route("/").get(getLists).post(postList);
router.route("/:id").patch(updateList).delete(deleteList);

module.exports = router;
