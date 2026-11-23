const mongoose = require("mongoose");

const goalScema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Please add a value"],
    },
  },
  {
    timeStamps: true,
  },
);

module.exports = mongoose.model("Goal", goalScema);
