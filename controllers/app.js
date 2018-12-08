const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const logger = require("morgan");
const cookieParser = require("cookie-parser");

const index = require("../models/index");
const users = require("../models/users");

var app = express();

require("dotenv").config();

//View engine set up
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(bodyParser.json());
 