const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  logoutUser,
  getUserProfile,
  changePassword,
  updateProfile,
  deleteUser,
  updateUser,
  getUserById,
  getAllUsers,
} = require("../Controllers/authController.js");
const { checkToken, authorizeRoles } = require("../Middleware/checkToken.js");

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/logout").post(checkToken, logoutUser);

router.route("/profile").get(checkToken, getUserProfile);

router.route("/changePassword").put(checkToken, changePassword);

router.route("/updateProfile").put(checkToken, updateProfile);

//Admin Routes
router
  .route("/admin/getAllUsers")
  .get(checkToken, authorizeRoles("admin"), getAllUsers);
router
  .route("/admin/user/:id")
  .get(checkToken, authorizeRoles("admin"), getUserById)
  .put(checkToken, authorizeRoles("admin"), updateUser)
  .delete(checkToken, authorizeRoles("admin"), deleteUser);

module.exports = router;
