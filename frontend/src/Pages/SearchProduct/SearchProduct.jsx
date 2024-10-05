import React, { useState, useEffect } from "react";
import Metadata from "../../Components/Metdata/Metadata";
import { useGetProductsQuery } from "../../ReduxStateManage/Slices/ApiSlices/productApiSlice";
import Loader from "../../Components/Loader/Loader";
import Product from "../../Components/Product/Product";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Pagination from "react-js-pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";

const SearchProduct = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showPagination, setShowPagination] = useState(false); 

  const { search } = useParams(); // Get the search parameter from the route
  const { data, isLoading, error } = useGetProductsQuery({
    search, 
    page: currentPage,
  });

  useEffect(() => {
    // Log data and errors
    console.log("API Response Data:", data);
    console.log("API Error:", error);

    // Error handling using toast notifications
    if (error && error.data) {
      toast.error(error.data.message || "An unexpected error occurred.", {
        position: "bottom-center",
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  }, [data, error]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    // Show pagination if product count is greater than 3
    if (data?.count > 3) {
      setShowPagination(true);
    } else {
      setShowPagination(false); // Hide pagination if 3 or fewer products
    }
  }, [data?.count]);

  return (
    <>
      <Metadata title="Searched Products" />
      <h1 className="text-4xl font-bold p-6">Searched Products</h1>

      {/* Show loader if data is loading */}
      {isLoading ? (
        <div className="flex justify-center items-center h-96">
          <Loader isLoading={isLoading} />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
            {data?.products?.length > 0 ? (
              data?.products.map((item) => (
                <Product key={item._id} item={item} />
              ))
            ) : (
              <p>No products found.</p>
            )}
          </div>

          {/* Conditionally render pagination based on the showPagination state */}
          {showPagination && (
            <section className="flex justify-center items-center mt-8">
              <div className="flex flex-row space-x-2">
                <Pagination
                  itemClass="inline-block px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out"
                  activeClass="bg-blue-500 text-white"
                  activeLinkClass="font-bold"
                  activePage={currentPage} // Current page number
                  onChange={handlePageChange} // Callback function to handle page change
                  totalItemsCount={data?.count} // Total number of items
                  itemsCountPerPage={data?.resultPerPage} // Number of items per page
                  nextPageText={
                    <span className="flex items-center space-x-1">
                      <span>Next</span>
                      <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                  }
                  prevPageText={
                    <span className="flex items-center space-x-1">
                      <FontAwesomeIcon icon={faArrowLeft} />
                      <span>Prev</span>
                    </span>
                  }
                  firstPageText={
                    <span className="flex items-center space-x-1">
                      <FontAwesomeIcon icon={faAngleDoubleLeft} />
                      <span>First</span>
                    </span>
                  }
                  lastPageText={
                    <span className="flex items-center space-x-1">
                      <span>Last</span>
                      <FontAwesomeIcon icon={faAngleDoubleRight} />
                    </span>
                  }
                  innerClass="flex space-x-2" // Additional class to ensure buttons are in a row with space between them
                  disabledClass="text-gray-400 cursor-not-allowed" // Styling for disabled buttons
                />
              </div>
            </section>
          )}
        </>
      )}
    </>
  );
};

export default SearchProduct;
