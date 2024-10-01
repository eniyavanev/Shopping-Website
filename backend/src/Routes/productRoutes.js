const {
  addProducts,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  searchProducts,
  createProductReview,
  getProductReviews,
  deleteReview,
} = require("../Controllers/prodcutController.js");

const express = require("express");
const { checkToken, authorizeRoles } = require("../Middleware/checkToken.js");
const router = express.Router();

router
  .route("/addProducts")
  .post(checkToken, authorizeRoles("admin"), addProducts);
router.route("/getProducts").get(checkToken, getProducts);

router
  .route("/:id")
  .get(getProductById)
  .put(updateProduct)
  .delete(deleteProduct);

router.route("/search/:search").get(searchProducts);

router
  .route("/productReview")
  .post(checkToken, createProductReview)
  .delete(checkToken, deleteReview);

router.route("/getProductReviews").get(getProductReviews);

module.exports = router;
