const asyncHandler = require("../middlewares/asyncHandler");
const List = require("../models/List");
const Task = require("../models/Task");

// @desc    -   Get all lists
// @route   -   GET /api/v1/lists
// @access  -   Private
exports.getLists = asyncHandler(async (req, res, next) => {
  const lists = await List.find();

  res.status(200).json({
    success: true,
    data: lists,
  });
});

// @desc    -   Create new list
// @route   -   POST /api/v1/lists
// @access  -   Private
exports.postList = asyncHandler(async (req, res, next) => {
  const list = await List.create(req.body);

  res.status(201).json({
    success: true,
    data: list,
  });
});

// @desc    -   Update list
// @route   -   PATCH /api/v1/lists/:id
// @access  -   Private
exports.updateList = asyncHandler(async (req, res, next) => {
  const list = await List.findOneAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: list,
  });
});

// @desc    -   Delete list
// @route   -   DELETE /api/v1/lists/:id
// @access  -   Private
exports.deleteList = asyncHandler(async (req, res, next) => {
  await List.findOneAndRemove(req.params.id);

  res.status(200).json({
    success: true,
    data: {},
  });
});
