import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Loader = ({ isLoading }) => {
  if (!isLoading) return null; // Don't render if not loading

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="flex flex-col items-center">
        <ClipLoader color={"#4A90E2"} loading={isLoading} size={80} />

        <p className="mt-4 text-white text-lg font-semibold">Loading...</p>
      </div>
    </div>
  );
};

export default Loader;
