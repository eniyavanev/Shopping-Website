import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Product = ({ item }) => {
  return (
    <div>
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
        {/* Image Container */}
        <div className="relative w-full h-48 overflow-hidden">
          <img
            className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-500"
            src={item.images[0]?.image} // Access first image
            alt={item.name}
          />
        </div>

        {/* Card Content */}
        <div className="p-6">
          <Link to={`/product/${item._id}`}>
            <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>

            {/* Rating */}
            <div className="flex items-center space-x-2">
              <div className="flex items-center mt-2">
                {[...Array(5)].map((star, index) =>
                  index < item.rating ? (
                    <FaStar key={index} className="w-5 h-5 text-yellow-500" />
                  ) : (
                    <FaRegStar
                      key={index}
                      className="w-5 h-5 text-yellow-500"
                    />
                  )
                )}
              </div>
              <small className="text-gray-500">
                ({`${item.numOfReviews} Reviews`})
              </small>
            </div>

            {/* Price */}
            <p className="text-lg font-bold text-amazon-orange mt-2">
              {`$${item.price}`}
              <small>
                <del className="text-gray-500">$99.99</del>
              </small>
            </p>
          </Link>

          {/* View Details Button */}
          <button className="mt-4 bg-amazon-blue text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 w-full">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
