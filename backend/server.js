const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = require("./src/DB/connectDB.js");

const productRoutes = require("../backend/src/Routes/productRoutes.js");
const authRoutes = require("../backend/src/Routes/authRoutes.js");
const orderRoutes = require("../backend/src/Routes/orderRoutes.js");
const { notFound, errorHandler } = require("./src/Middleware/errorMiddler.js");
const cookieParser = require("cookie-parser");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
connectDB();

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);
app.use(notFound);
app.use(errorHandler);
const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log(
    `Server started on port ${process.env.PORT} in ${process.env.NODE_ENV} mode.`
  );
});

//Oru promise reject aagum podhu, athoda .catch() block la error handle pannala na itha vandhudum.
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down server due to unhandled promise rejection");

  // Close server and node process
  server.close(() => {
    process.exit(1);
  });
});

// Oru try-catch illama code la direct-a oru error throw pannina podhu ithu varum.
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down server due to uncaught exception");
  server.close(() => {
    process.exit(1);
  });
});
