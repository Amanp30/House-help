const express = require("express");
const CONFIG = require("./config/config");
const routes = require("./routes");
const expressConfig = require("./frameworks/expressConfig");
const serverConfig = require("./frameworks/server");
const { UserCollection } = require("./frameworks/database/collections");

const app = express();

expressConfig(app, express);

routes(app, express);

serverConfig(app, CONFIG);
