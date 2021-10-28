const path = require("path");
const express = require("express");
const morgan = require("morgan");
var exphbs = require("express-handlebars");
const app = express();
const port = 8080;

const route = require("./routers");

// parse
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect DB
const db = require("./config/db/index");
db.connect();

// http logger
app.use(morgan("combined"));

// Static file
app.use(express.static(path.join(__dirname, "public")));

//template engine
app.engine(".hbs", exphbs({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "/resources/views"));

// Handle call API from client
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Route
route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
