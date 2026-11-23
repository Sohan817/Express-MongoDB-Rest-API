const asyncHandler = require("express-async-handler");

//@desc Get Goals
//@route GET/api/goals
//@access private
const getGoals = asyncHandler(async (req, res) => {
  res.status(201).send({ message: `Get Goals routes` });
});
//@desc set Goals
//@route POST/api/goals
//@access private
const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  res.status(201).send({ message: `Set Goals routes` });
});

//@desc update Goals
//@route PUT/api/goals
//@access private
const updateGoals = asyncHandler(async (req, res) => {
  res.status(201).json({ message: `Update Goals routes ${req.params.id}` });
});

//@desc delete Goals
//@route delete/api/goals
//@access private
const deleteGoals = asyncHandler(async (req, res) => {
  res.status(201).json({ message: `Delete Goals routes ${req.params.id}` });
});

module.exports = {
  getGoals,
  deleteGoals,
  updateGoals,
  setGoals,
};
