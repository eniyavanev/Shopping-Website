import React from 'react';
import Logo from "../../assets/Images/Amazon-Logo.webp"
import { FaSearch } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";

const Header = () => {
  return (
    <nav>
      <div className="bg-gray-700 font-poppins flex justify-between items-center px-3 py-1 max-sm:flex-col max-sm:space-y-2">
        <div className="">
            <img src={Logo} alt="Logo" className='w-[100px]'/>
        </div>
        <div className='py-2 w-[40%] flex max-md:w-[70%] max-sm:w-[80%] mx-2'>
            <input type="text" className='focus:outline-none py-1 w-full px-4 rounded-l-sm' placeholder='Enter Product Name'/>
            <button className='bg-yellow-500 py-1 px-3'><FaSearch /></button>
        </div>
        <div className='flex items-center space-x-2 max-sm:flex-col max-sm:space-y-2 relative'>
            <button className='bg-yellow-500 py-1 px-3 rounded-sm'>Login</button>
            <button className='bg-yellow-500 py-1 px-3 rounded-sm '><MdShoppingCart size={20}/><p className='bg-red-600 text-white rounded-full w-5 h-5 flex justify-center items-center absolute -top-2 -right-1'>0</p></button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
