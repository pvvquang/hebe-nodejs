const express = require("express");
const router = express.Router();

const productController = require("../app/controllers/ProductController");

router.get("/new-arrivals", productController.newArrival);
router.get("/best-seller", productController.bestSell);
router.get("/top-rate", productController.topRate);
router.get("/men", productController.getMens);
router.get("/women", productController.getWomens);
router.get("/bags", productController.getBags);
router.get("/shoes", productController.getShoes);

router.post("/store", productController.addProduct);
router.get("/", productController.index);

module.exports = router;
