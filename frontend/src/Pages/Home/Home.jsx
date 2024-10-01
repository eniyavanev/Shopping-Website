import React, { useState } from "react";
import Metadata from "../../Components/Metdata/Metadata";
import { FaStar, FaRegStar } from "react-icons/fa";
import Shoe from "../../assets/Images/Shoes.jpg";
import Water from "../../assets/Images/Water-Bottle.jpg";
import Sofa from "../../assets/Images/Sofa.jpg";
import TShirt from "../../assets/Images/T-Shirt.jpg";
import Mobile from "../../assets/Images/Mobile.jpg";
import Shoe_1 from "../../assets/Images/Shoes-1.jpg";
import Water_1 from "../../assets/Images/WaterBottle-1.jpg";
import Sofa_1 from "../../assets/Images/Sofa-1.jpg";
import TShirt_1 from "../../assets/Images/T-Shirt-1.jpg";
import Mobile_1 from "../../assets/Images/Mobile-1.jpg";

const Home = () => {
  const data = [
    {
      id: 1,
      name: "Shoes",
      image: Shoe,
      image_1: Shoe_1,
      price: 100,
      rating: 4.5,
      description:
        "Casual Shoes for Men in Red Color in Nike Brand With All Sizes",
      reviews: 10,
    },
    {
      id: 2,
      name: "Water Bottle",
      image: Water,
      image_1: Water_1,
      price: 50,
      rating: 3.5,
      description: "Water Bottle Gray Color",
      reviews: 5,
    },
    {
      id: 3,
      name: "Sofa",
      image: Sofa,
      image_1: Sofa_1,
      price: 5000,
      rating: 5,
      description: "Sofa for Modern Home",
      reviews: 1,
    },
    {
      id: 4,
      name: "T-Shirt",
      image: TShirt,
      image_1: TShirt_1,
      price: 1000,
      rating: 4,
      description: "T-Shirt for Men",
      reviews: 2,
    },
    {
      id: 5,
      name: "Mobile",
      image: Mobile,
      image_1: Mobile_1,
      price: 15000,
      rating: 5,
      description: "Latest Mobile Collections",
      reviews: 3,
    },
  ];

  return (
    <>
      <Metadata title="All Products" />
      <h1 className="text-4xl font-bold  p-6">Latest Products</h1>
      {/* Grid for Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 ">
        {data.map((item) => {
          const [hovered, setHovered] = useState(false);

          return (
            <div
              key={item.id}
              className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Image Container */}
              <div
                className="relative w-full h-48 overflow-hidden"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                {/* Primary Image */}
                <img
                  className={`absolute inset-0 w-full h-full object-cover transform ${
                    hovered ? "scale-0" : "scale-100"
                  } transition-transform duration-500`}
                  src={item.image}
                  alt="Primary Product"
                />

                {/* Secondary Image (Shown on hover) */}
                <img
                  className={`absolute inset-0 w-full h-full object-cover transform ${
                    hovered ? "scale-100" : "scale-0"
                  } transition-transform duration-500`}
                  src={item.image_1}
                  alt="Secondary Product"
                />
              </div>

              {/* Card Content */}
              <div className="p-6">
                {/* Product Name */}
                <h2 className="text-xl font-semibold text-gray-800">
                  {item.name}
                </h2>

                {/* Rating */}
                <div className="flex items-center space-x-2">
                  <div className="flex items-center mt-2">
                    <FaStar className="w-5 h-5 text-yellow-500" />
                    <FaStar className="w-5 h-5 text-yellow-500" />
                    <FaStar className="w-5 h-5 text-yellow-500" />
                    <FaStar className="w-5 h-5 text-yellow-500" />
                    <FaRegStar className="w-5 h-5 text-yellow-500" />
                  </div>
                  <small className="text-gray-500">
                    ({`${item.reviews} Reviews`})
                  </small>
                </div>

                {/* Price */}
                <p className="text-lg font-bold text-amazon-orange mt-2">
                  {`$${item.price}`}
                  <small>
                    <del className="text-gray-500">$99.99</del>
                  </small>
                </p>

                {/* View Details Button */}
                <button className="mt-4 bg-amazon-blue text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 w-full">
                  View Details
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
