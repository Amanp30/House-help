const { rateLimit } = require("express-rate-limit");

const formQueryLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 3,
  standardHeaders: true,
  legacyHeaders: false,

  message: (req, res) =>
    res.json({ message: "You can now submit another query after 15 minutes" }),
});

module.exports = formQueryLimiter;
