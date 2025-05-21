const mongoose = require("mongoose");

const connectToDB = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("DB connected successfully!");
    })
    .catch((error) => {
      console.log("DB connection failed!");
      console.error(error);
      process.exit(1);
    });
};

exports.connectDB = connectToDB;
