const acceptQueryForm = require("../controller/acceptQueryForm");
const formQueryLimiter = require("../rate-limiter/query-form-limit");

function backendRoutes(express) {
  const router = express.Router();

  router.route("/accept-query-form").post(formQueryLimiter, acceptQueryForm);

  router.all("*", (req, res) => {
    res.status(404).send({ message: "Not Found" });
  });

  return router;
}

module.exports = backendRoutes;
