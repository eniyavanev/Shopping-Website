const dotenv = require("dotenv");

dotenv.config();

// Middleware for handling 404 (Not Found) errors
const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error); // Pass the error to the next middleware (errorHandler)
};

// General error handling middleware
const errorHandler = (err, req, res, next) => {
  // If the statusCode wasn't set by a previous middleware, set it to 500 (Internal Server Error)
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);

  // Handle specific errors like validation or ObjectId casting errors
  let message = err.message || "Internal Server Error";
  
  // Handle validation errors
  if (err.name === "ValidationError") {
    message = Object.values(err.errors).map((val) => val.message).join(", ");
    res.status(400);
  }

  // Handle ObjectId CastError (e.g., invalid MongoDB ObjectId)
  if (err.name === "CastError" && err.kind === "ObjectId") {
    message = "Resource not found. Invalid Object ID.";
    res.status(404);
  }

  // Send the error response with a message and, if in development mode, the stack trace
  res.json({
    message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
    //error: err
  });
};

module.exports = { errorHandler, notFound };
