const express = require("express");
const morgan = require("morgan");
var path = require("path");
const handlebars = require("express-handlebars");
const app = express();

const routes = require("./routes");

const port = 3000;

//static file img
app.use(express.static(path.join(__dirname, "public")));

//Change form data from body to object
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Http logger
app.use(morgan("combined"));

//Template engine
app.engine("hbs", handlebars.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

//Routes init
routes(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
