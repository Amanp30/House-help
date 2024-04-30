const connectMongoDb = require("./database");

async function serverConfig(app, CONFIG) {
  try {
    await connectMongoDb();
    app.listen(CONFIG.port, () => {
      console.log(
        `Express server listening on port ${CONFIG.port}, in ${app.get(
          "env"
        )} mode`
      );
    });
  } catch (err) {
    console.error(
      "An error occurred while connecting to the database or starting the server:"
    );
    console.error(err);
    process.exit(1); // Exit the process with a non-zero code indicating failure
  }
}

module.exports = serverConfig;
