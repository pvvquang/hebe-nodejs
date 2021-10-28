const productRoute = require("./products");

function route(app) {
  // product
  app.use("/products", productRoute);

  // home
  app.use("/", function (req, res, next) {
    res.render("home");
  });
}

module.exports = route;
