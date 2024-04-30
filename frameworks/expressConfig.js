const compression = require("compression");
const { default: helmet } = require("helmet");
const morgan = require("morgan");

function expressConfig(app, express) {
  // app.use(helmet());

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static("public"));

  app.use(compression());

  app.use((req, res, next) => {
    // res.setHeader("Access-Control-Allow-Origin", "http://some-accepted-origin");
    // Request methods you wish to allow
    // res.setHeader(
    //   "Access-Control-Allow-Methods",
    //   "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    // );
    // Request headers you wish to allow
    // res.setHeader(
    //   "Access-Control-Allow-Headers",
    //   "X-Requested-With, Content-type, Authorization, Cache-control, Pragma"
    // );
    // Pass to next layer of middleware
    next();
  });

  app.use(morgan("dev"));
}

module.exports = expressConfig;
