const asyncHandler = require("express-async-handler");

const Goal = require("../models/goalModel");
//@desc Get Goals
//@route GET/api/goals
//@access private
const getGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.find();
  res.status(201).json(goal);
});
//@desc set Goals
//@route POST/api/goals
//@access private
const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  const goal = await Goal.create({
    text: req.body.text,
  });
  res.status(201).json(goal);
});

//@desc update Goals
//@route PUT/api/goals
//@access private
const updateGoals = asyncHandler(async (req, res) => {
  const goalID = await Goal.findById(req.params.id);
  if (!goalID) {
    res.status(400);
    throw new Error(`Goal id ${goalID} not found`);
  }
  const update = await Goal.findByIdAndUpdate(req.params.id, req.body);
  res.status(201).json(update);
});

//@desc delete Goals
//@route delete/api/goals
//@access private
const deleteGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error(`Goal id ${goalID} not found`);
  }
  const remove = await Goal.findByIdAndDelete(req.params.id);
  res.status(201).json(remove);
});

module.exports = {
  getGoals,
  deleteGoals,
  updateGoals,
  setGoals,
};
