const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db.js");
const { errorHandler } = require("./middleware/errorMiddleware.js");

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());

connectDB();

app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalsRoutes.js"));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
