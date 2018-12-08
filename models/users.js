const express = require("express");
const router = express.Router();

router.get("/", function(req, res) {
  res.render("username", { title: "Registration" });
});

router.post("register", function(req, res) {
  // res.render("username", {title: "Registration Complete"});
  username = req.body.username;
  email = req.body.email;
  password = req.body.password;

  const db = require("connection.js");
});

module.exports = router;
