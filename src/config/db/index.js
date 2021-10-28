const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/shop_product");
    console.log("Connect db successfully!");
  } catch (e) {
    console.log("fail connect db", e);
  }
}

module.exports = { connect };
