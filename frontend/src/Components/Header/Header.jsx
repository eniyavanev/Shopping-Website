import React from "react";
import Logo from "../../assets/Images/Amazon-Logo.webp";
import { MdShoppingCart } from "react-icons/md";
import Search from "../Search/Search";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <div className="bg-gray-700 font-poppins flex justify-between items-center px-3 py-1 max-sm:flex-col max-sm:space-y-2">
       <Link to="/">
       <div className="">
          <img src={Logo} alt="Logo" className="w-[100px]" />
        </div>
       </Link>
        <>
         <Search />
        </>
        <div className="flex items-center space-x-2 max-sm:flex-col max-sm:space-y-2 relative">
          <button className="bg-yellow-500 py-1 px-3 rounded-sm">Login</button>
          <button className="bg-yellow-500 py-1 px-3 rounded-sm ">
            <MdShoppingCart size={20} />
            <p className="bg-red-600 text-white rounded-full w-5 h-5 flex justify-center items-center absolute max-sm:top-9 -top-2 -right-1">
              0
            </p>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
