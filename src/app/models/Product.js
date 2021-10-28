const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Product = new Schema(
  {
    name: { type: String },
    price_old: { type: Number },
    price_new: { type: Number },
    person: { type: Array },
    color: { type: Array },
    photoURL: { type: Array },
    type: { type: String },
    type_sell: { type: Array },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", Product);
