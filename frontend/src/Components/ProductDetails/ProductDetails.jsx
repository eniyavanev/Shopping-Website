import React from "react";

const ProductDetails = ({ item }) => {
  const [qty, setQty] = React.useState(1);

  const incrementQty = () => {
    setQty(qty + 1);
  };

  const decrementQty = () => {
    if (qty > 1) setQty(qty - 1);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Left Side: Product Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={item.images[0]?.image}
            alt={item.name}
            className="max-w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Right Side: Product Details */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl font-semibold text-gray-800">{item.name}</h2>
          <p className="mt-4 text-gray-600 text-lg">{item.description}</p>

          <div className="flex items-center mt-4">
            <span className="text-yellow-500 font-semibold text-xl">
              {item.ratings} ★
            </span>
            <span className="ml-4 text-gray-500">{`(${item.numOfReviews} reviews)`}</span>
          </div>

          <p className="text-2xl font-bold text-gray-800 mt-6">${item.price}</p>

          {/* Quantity Selector */}
          <div className="flex items-center mt-6">
            <button
              onClick={decrementQty}
              className={`bg-gray-300 px-4 py-2 rounded-l-lg focus:outline-none ${
                qty === 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={qty === 1}
            >
              -
            </button>
            <span className="px-4 py-2 border-t border-b border-gray-300">
              {qty}
            </span>
            <button
              onClick={incrementQty}
              className="bg-gray-300 px-4 py-2 rounded-r-lg focus:outline-none"
            >
              +
            </button>
          </div>

          {/* Add to Cart Button */}
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg mt-6 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
