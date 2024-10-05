import React from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [search, setSearch] = React.useState("");

  const navigate = useNavigate();
  const handleSearch = (e) => {
    //console.log(search);
    e.preventDefault();
    if (search === "") {
      toast.error("Please enter product name");
      return;
    }

    navigate(`/search/${search}`);
  };
  return (
    <div className="py-2 w-[40%] flex max-md:w-[70%] max-sm:w-[80%] mx-2">
      <input
        type="text"
        className="focus:outline-none py-1 w-full px-4 rounded-l-sm"
        placeholder="Enter Product Name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSearch} className="bg-yellow-500 py-1 px-3">
        <FaSearch />
      </button>
    </div>
  );
};

export default Search;
