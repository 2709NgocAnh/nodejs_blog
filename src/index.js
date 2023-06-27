const express = require("express");
var path = require("path");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const app = express();
const port = 3000;
//static file img
app.use(express.static(path.join(__dirname, "public")));

//Http logger
app.use(morgan("combined"));

//Template engine
app.engine("hbs", handlebars.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));
console.log(path.join(__dirname));

// Routes
app.get("/", function (req, res) {
  res.render("home");
});
app.get("/new", function (req, res) {
  res.render("new");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
