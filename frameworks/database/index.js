const { client } = require("./collections");

async function connectMongoDb() {
  try {
    await client.connect();
    console.log("Successfully connected to MongoDB!");
    return true;
  } catch (err) {
    console.error("Error connecting to MongoDB:");
    console.error(err);
    throw err;
  }
}

module.exports = connectMongoDb;
