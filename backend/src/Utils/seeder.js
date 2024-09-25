const products = require("../data/product.json");
const Product = require("../Models/productModel.js");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = require("../DB/connectDB.js");
connectDB();

const seedProducts = async () => {
  try {
    await Product.deleteMany();
    console.log("Products deleted");
    await Product.insertMany(products);
    console.log("Products created");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

seedProducts();
