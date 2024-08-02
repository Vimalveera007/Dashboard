import React from "react";
import { FaHome, FaChartBar, FaUtensils, FaCog } from "react-icons/fa";
import { CiWallet } from "react-icons/ci";
import { CgNotes } from "react-icons/cg";
import { BsHandbag } from "react-icons/bs";
import { IoExitOutline } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className="w-[100px]  bg-gray-800 text-white flex flex-col text-2xl">
      <nav className="flex flex-col p-4 items-center justify-center">
        <a href="#" className="flex items-center py-5">
          <FaHome className="mr-2 text-blue-500" />
        </a>
        <a href="#" className="flex items-center py-5 ">
          <FaChartBar className="mr-2 " />
        </a>
        <a href="#" className="flex items-center py-5 ">
          <CiWallet className="mr-2 text-xl  text-white" />
        </a>
        <a href="#" className="flex items-center py-5 ">
          <CgNotes className="mr-2" />
        </a>
        <a href="#" className="flex items-center py-5 ">
          <BsHandbag className="mr-2" />
        </a>
      </nav>
      <div className="flex-1"></div>
      <div className="flex flex-col p-4 items-center justify-center">
        <IoExitOutline />
      </div>
    </div>
  );
};

export default Sidebar;
