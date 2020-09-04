const asyncHandler = require("../middlewares/asyncHandler");
const Task = require("../models/Task");

// @desc    -   Get all tasks within a list
// @route   -   GET /api/v1/lists/:listId/tasks
// @access  -   Private
exports.getTasks = asyncHandler(async (req, res, next) => {
  const tasks = await Task.find({
    list: req.params.listId,
  });

  return res.status(200).json({
    success: true,
    data: tasks,
  });
});

// @desc    -   Get task within a list
// @route   -   GET /api/v1/lists/:listId/tasks/:taskId
// @access  -   Private
exports.getTask = asyncHandler(async (req, res, next) => {
  const tasks = await Task.find({
    _id: req.params.taskId,
    list: req.params.listId,
  });

  return res.status(200).json({
    success: true,
    data: tasks,
  });
});

// @desc    -   Create a task within a list
// @route   -   POST /api/v1/lists/:listId/tasks
// @access  -   Private
exports.createTask = asyncHandler(async (req, res, next) => {
  const task = await Task.create({
    title: req.body.title,
    list: req.params.listId,
  });

  return res.status(200).json({
    success: true,
    data: task,
  });
});

// @desc    -   Update a task within a list
// @route   -   PATCH /api/v1/lists/:listId/tasks/:taskId
// @access  -   Private
exports.updateTask = asyncHandler(async (req, res, next) => {
  const task = await Task.findOneAndUpdate(
    {
      _id: req.params.taskId,
      list: req.params.listId,
    },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  return res.status(201).json({
    success: true,
    data: task,
  });
});

// @desc    -   Delete a task within a list
// @route   -   DELETE /api/v1/lists/:listId/tasks/:taskId
// @access  -   Private
exports.deleteTask = asyncHandler(async (req, res, next) => {
  await Task.findOneAndRemove({
    _id: req.params.taskId,
    list: req.params.listId,
  });

  return res.status(200).json({
    success: true,
    data: {},
  });
});
