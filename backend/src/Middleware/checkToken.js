const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const User = require("../Models/userModel.js");

const checkToken = asyncHandler(async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        return next(new Error("Not authorized, no token"));
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) {
        return next(new Error("Not authorized, user not found"));
    }
    req.user = user;
    next();
});

// Middleware to check for specific roles
const authorizeRoles = (...roles) => {
    return (req, res, next) => {
      if (!roles.includes(req.user.role)) {
        return next(
          new Error(`Role: ${req.user.role} is not allowed to access this route`)
        );
      }
      next();
    };
  };
module.exports = {checkToken, authorizeRoles}