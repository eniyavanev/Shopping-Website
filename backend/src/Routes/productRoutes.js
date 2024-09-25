const {
  addProducts,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  searchProducts,
} = require("../Controllers/prodcutController.js");

const express = require("express");
const router = express.Router();

router.route("/").post(addProducts).get(getProducts);

router.route("/:id").get(getProductById).put(updateProduct).delete(deleteProduct);

router.route("/search/:search").get(searchProducts);

module.exports = router;
