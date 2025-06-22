require("dotenv").config();
const mongoose = require("mongoose");

const config = {
  dbUrl: process.env.DB_URL,
  port: process.env.PORT,
  secret: process.env.JWT_SECRET,

  db: () => {
    const database = async () => {
      await mongoose.connect(config.dbUrl);
      console.log("Database connected");
    };
    return database();
  },
};

module.exports = config;
