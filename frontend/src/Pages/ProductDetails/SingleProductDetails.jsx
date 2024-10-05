import React, { useEffect } from "react";
import { useGetProductByIdQuery } from "../../ReduxStateManage/Slices/ApiSlices/productApiSlice";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Metadata from "../../Components/Metdata/Metadata";
import Loader from "../../Components/Loader/Loader";
import ProductDetails from "../../Components/ProductDetails/ProductDetails"; // Adjust this import based on your structure

const SingleProductDetails = () => {
  const { id } = useParams();
  const { data, isLoading, error, isSuccess } = useGetProductByIdQuery(id);

  // Show error toast if there is an error
  useEffect(() => {
    if (error && error?.data) {
      toast.error(error?.data?.message || "An unexpected error occurred.", {
        position: "bottom-center",
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  }, [error]);

  return (
    <>
      <Metadata title="Product Details" />
      <h1 className="text-4xl font-bold p-6">Product Details</h1>
      
      {isLoading ? (
        <div className="flex justify-center items-center h-96">
          <Loader isLoading={isLoading} />
        </div>
      ) : (
        isSuccess && (
          <div className="">
            {data?.product ? (
              <ProductDetails key={data.product._id} item={data.product} />
            ) : (
              <p>No product found❗</p>
            )}
          </div>
        )
      )}
    </>
  );
};

export default SingleProductDetails;
