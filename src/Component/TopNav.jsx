import React from "react";
import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";

import { MdOutlineMail } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import suit from "../Images/suit.jpg";
import lotus from "../Images/lotus.png";
const TopNav = () => {
  return (
    <div className="flex items-center justify-between bg-gray-800 p-4 shadow">
      <div className="flex gap-20">
        <div className="flex items-center justify-center h-auto ml-2">
          <img src={lotus} alt="" className="w-[40px] h-[40px]" />
        </div>
        <div className="flex items-center">
          <div className="relative mr-4">
            <input
              type="search"
              placeholder="Search"
              className="px-4 py-2 rounded  bg-gray-700 text-white focus:outline-none"
            />
            <FaSearch className="absolute top-3 right-3 text-gray-500" />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <MdOutlineMail className="text-white text-3xl mr-4 bg-gray-600 rounded-full p-1" />
        <IoSettingsOutline className="text-white text-3xl mr-4 bg-gray-600 rounded-full p-1" />
        <FaBell className="text-white text-3xl mr-4 bg-gray-600 rounded-full p-1" />
        <img
          src={suit}
          alt=""
          className="w-[30px] h-[30px] bg-gray-600 rounded-full"
        />
      </div>
    </div>
  );
};

export default TopNav;
