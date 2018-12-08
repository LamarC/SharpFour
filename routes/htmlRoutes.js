const path = require("path");

module.exports = function (app) {
  app.get("/", function (req, res) {
    console.log("homefired");
    res.render("login"); 
  });

  app.get("/add", function (req, res) {
    res.render("home");
  });

  app.get("/all", function (req, res) {
    res.render("menu");
  });
  app.get("/all", function (req, res) {
    res.render("contactus");
  });
  

};