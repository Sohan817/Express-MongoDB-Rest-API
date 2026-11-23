const mongoose = require("mongoose");

const mongoDbUrl = process.env.MONGO_URI;

const connectDB = async () => {
  mongoose
    .connect(mongoDbUrl)
    .then(() => {
      console.log(
        `MongoDB connected, ${mongoose.connection.host}`.cyan.underline,
      );
    })
    .catch((err) => {
      console.log(`Mongodb connected error ${err}`);
      process.exit(1);
    });
};

module.exports = connectDB;
