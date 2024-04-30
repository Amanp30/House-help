const dotenv = require("dotenv");
dotenv.config();

const CONFIG = {
  port: process.env.PORT || 9000,
  mongo: {
    uri: process.env.MONGO_URI || "mongodb://127.0.0.1:27017",
  },
  jwtSecret: process.env.JWT_SECRET || "jkl!±@£!@ghj1237",
};

module.exports = CONFIG;
