const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const User = require("../Models/userModel.js");

const checkToken = asyncHandler(async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        const error = new Error("LogIn first to access this resource");
        res.statusCode = 401;
        return next(error,  res);
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) {
        const error = new Error("User not found, please login");
        res.statusCode = 401;
        return next(error,  res);
    }
    req.user = user;
    next();
});

// Middleware to check for specific roles
const authorizeRoles = (...roles) => {
    return (req, res, next) => {
      if (!roles.includes(req.user.role)) {
        const error = new Error(
          `Role: ${req.user.role} is not allowed to access this resource`
        );
        res.statusCode = 403;
        return next(error, res);
      }
      next();
    };
  };
module.exports = {checkToken, authorizeRoles}