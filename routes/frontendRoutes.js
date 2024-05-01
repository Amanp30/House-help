const faqs = require("../data/faqs");
const list = require("../data/helpersList");
const crypto = require("crypto");

function frontendRoutes(app, express) {
  const router = express.Router();

  app.set("view engine", "ejs");
  app.set("views", "views");

  router
    .route("/")
    .get((req, res, next) => res.render("index", { list, faqs }));

  router.route("/:slug").get((req, res, next) => {
    try {
      // Generate nonce value
      const nonce = crypto.randomBytes(16).toString("base64");

      // Set CSP header with nonce and unpkg
      res.setHeader(
        "Content-Security-Policy",
        `script-src 'self' 'nonce-${nonce}' https://unpkg.com`
      );

      const slug = req.params.slug;
      const data = list.find((v) => slug.includes(v.link));
      if (data) return res.render("serviceBySlug", { data, nonce });
      throw new Error("Not in list");
    } catch (error) {
      return res.render("error");
    }
  });

  router.get("*", (req, res) => {
    res.render("pageNotFound");
  });

  return router;
}

module.exports = frontendRoutes;
