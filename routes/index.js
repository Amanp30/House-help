const backendRoutes = require("./backendRoutes");
const frontendRoutes = require("./frontendRoutes");

function routes(app, express) {
  app.use("/api", backendRoutes(express));
  app.use("/", frontendRoutes(app, express));
}

module.exports = routes;
