import React from "react";
import Sidebar from "./Sidebar";
import TopNav from "./TopNav";
import { FaClipboardList, FaTruck, FaDollarSign } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { BsHandbag } from "react-icons/bs";
import { GoGoal } from "react-icons/go";
import { IoIosArrowDropright } from "react-icons/io";
import { IoFastFoodOutline } from "react-icons/io5";
import { BiFoodMenu } from "react-icons/bi";
import suit from "../Images/suit.jpg";
import Chart from "./Bar";
import andrew from "../Images/Andrew.jpg";
import deve from "../Images/deve.jpg";
import men1 from "../Images/men1.jpg";
import men2 from "../Images/men2.jpg";
import "./Sample.css"
const Sample = () => {
  return (
    <div className="max-h-screen flex flex-col">
      <TopNav />
      <div className="flex flex-1 ">
        <Sidebar />
        <div className="self-stretch flex-1 p-4 bg-gray-900 text-white overflow-hidden">
          <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
            <div className="bg-gray-800 p-4 rounded-lg flex-col items-center">
              <FaClipboardList className="text-3xl text-blue-500 mr-4 mb-2" />
              <div>
                <h2 className="text-md mb-5">Total Orders</h2>
                <div className="flex justify-between items-center">
                  <p className="text-3xl font-bold">75</p>
                  <div className="flex gap-1 items-center text-green-500">
                    <IoMdArrowDropup className="text-xl" />
                    <p>3%</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg flex-col items-center">
              <FaTruck className="text-3xl text-green-500 mr-4 mb-2" />
              <div>
                <h2 className="text-xl mb-5">Total Delivered</h2>
                <div className="flex justify-between items-center">
                  <p className="text-3xl font-bold">70</p>
                  <div className="flex gap-1 items-center text-red-500">
                    <IoMdArrowDropdown />
                    <p>3%</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg flex-col items-center">
              <BsHandbag className="text-3xl text-red-500 mr-4 mb-2" />
              <div>
                <h2 className="text-xl mb-5">Total Cancelled</h2>
                <div className="flex justify-between items-center">
                  <p className="text-3xl font-bold">05</p>
                  <div className="flex gap-1 items-center text-green-500">
                    <IoMdArrowDropup />
                    <p>3%</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg flex-col items-center">
              <FaDollarSign className="text-3xl text-purple-500 mr-4  mb-2" />
              <div>
                <h2 className="text-xl mb-5">Total Revenue</h2>
                <div className="flex justify-between items-center">
                  <p className="text-3xl font-bold">$12k</p>
                  <div className="flex gap-1 items-center text-red-500">
                    <IoMdArrowDropdown />
                    <p>3%</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg col-span-1 md:col-span-2 lg:col-span-1 flex items-center">
              <div className="flex-1">
                <h2 className="text-nd mb-8">Net Profit</h2>
                <p className="text-3xl font-bold">$6759.25</p>
                <div className="flex gap-1 items-center text-green-500">
                  <IoMdArrowDropup />
                  <p>3%</p>
                </div>
              </div>
              <div className="w-1/4">
                <div className="bg-blue-600 text-center p-2 rounded-full">
                  70%
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
            <div className="bg-gray-800 p-4 rounded-lg lg:col-span-2">
              <div className="flex justify-between">
                <h2 className="text-xl mb-4">Activity</h2>

                <p>Weeky</p>
              </div>

              <Chart />
              <div className=">h-32 bg-gray-700 rounded mb-4"></div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg flex flex-col justify-center">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-7">
                  <div className="bg-red-500 rounded-full p-2">
                    <GoGoal className="text-2xl" />
                  </div>

                  <h2 className="text-xl">Goals</h2>
                </div>
                <div>
                  <IoIosArrowDropright className="text-2xl" />
                </div>
              </div>
              <div className="flex justify-between items-center mt-5">
                <div className="flex items-center gap-7">
                  <div className="bg-blue-500 rounded-full p-2">
                    <IoFastFoodOutline className="text-2xl" />
                  </div>
                  <h2 className="text-xl">Popular Dishes</h2>
                </div>
                <div>
                  <IoIosArrowDropright className="text-2xl" />
                </div>
              </div>

              <div className="flex justify-between items-center mt-5">
                <div className="flex items-center gap-7">
                  <div className="bg-gray-500 rounded-full p-2">
                    <BiFoodMenu className="text-2xl" />
                  </div>
                  <h2 className="text-xl">Menus</h2>
                </div>
                <div>
                  <IoIosArrowDropright className="text-2xl" />
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h2 className="text-xl mb-4">Recent Orders</h2>
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-600">
                    <th className="py-2">Customer</th>
                    <th className="py-2">Order No.</th>
                    <th className="py-2">Amount</th>
                    <th className="py-2">Status</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-b border-gray-600">
                    <td className="py-2 flex items-center gap-2">
                      <img
                        src={suit}
                        alt=""
                        className="w-[30px] h-[30px] bg-gray-600 rounded-full"
                      />
                      Wade Warren
                    </td>
                    <td className="py-2">15478256</td>
                    <td className="py-2">$124.00</td>
                    <div className="bg-green-900 rounded-full  px-2 w-fit my-4">
                      <td className="text-green-500 ">Delivered</td>
                    </div>
                  </tr>
                  <tr className="border-b border-gray-600">
                    <td className="py-2 flex items-center gap-2">
                      <img
                        src={deve}
                        alt=""
                        className="w-[30px] h-[30px] bg-gray-600 rounded-full"
                      />
                      Jane Cooper
                    </td>
                    <td className="py-2">48967586</td>
                    <td className="py-2">$305.62</td>
                    <div className="bg-green-900 rounded-full mb-4 px-2 w-fit">
                      <td className="text-green-500 ">Delivered</td>
                    </div>
                  </tr>
                  <tr className="border-b border-gray-600">
                    <td className="py-2 flex items-center gap-2">
                      <img
                        src={men1}
                        alt=""
                        className="w-[30px] h-[30px] bg-gray-600 rounded-full"
                      />
                      Guy Hawkins
                    </td>
                    <td className="py-2">78958215</td>
                    <td className="py-2">$456.88</td>
                    <div className="bg-red-900 rounded-full mb-4 px-2 w-fit">
                      <td className="text-red-500 ">Cancelled</td>
                    </div>
                  </tr>
                  <tr className="border-b border-gray-600">
                    <td className="py-2 flex items-center gap-2">
                      <img
                        src={men2}
                        alt=""
                        className="w-[30px] h-[30px] bg-gray-600 rounded-full"
                      />
                      Kristin Watson
                    </td>
                    <td className="py-2">20965732</td>
                    <td className="py-2">$65.00</td>
                    <div className="bg-red-900 rounded-full mb-4 px-2 w-fit">
                      <td className="text-red-500 ">Pending</td>
                    </div>
                  </tr>
                  <tr className="border-b border-gray-600">
                    <td className="py-2 flex items-center gap-2">
                      <img
                        src={suit}
                        alt=""
                        className="w-[30px] h-[30px] bg-gray-600 rounded-full"
                      />
                      Cody Fisher
                    </td>
                    <td className="py-2">95715620</td>
                    <td className="py-2">$545.00</td>
                    <div className="bg-green-900 rounded-full mb-4 px-2 w-fit">
                      <td className="text-green-500 ">Delivered</td>
                    </div>
                  </tr>
                  <tr className="">
                    <td className="py-2 flex items-center gap-2">
                      <img
                        src={men1}
                        alt=""
                        className="w-[30px] h-[30px] bg-gray-600 rounded-full"
                      />
                      Sabannah Nguyen
                    </td>
                    <td className="py-2">78514568</td>
                    <td className="py-2">$128.20</td>
                    <div className="bg-green-900 rounded-full mb-4 px-2 w-fit">
                      <td className="text-green-500 ">Delivered</td>
                    </div>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg customerReview">
              <h2 className="text-xl mb-4">Customer's Feedback</h2>
              <div className="mb-4 border-b border-gray-600">
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={suit}
                    alt=""
                    className="w-[40px] h-[40px] bg-gray-600 rounded-full"
                  />
                  <p className="font-bold">Jenny Wilson</p>
                </div>

                <p>⭐⭐⭐⭐</p>
                <p className="mb-3">
                  The food was excellent and so was the service.I had the
                  mushroom risotto with scallops which awesome.I had a burger
                  over greens which was also very good.
                </p>
              </div>
              <div className="mb-4 border-b border-gray-600">
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={deve}
                    alt=""
                    className="w-[40px] h-[40px] bg-gray-600 rounded-full"
                  />
                  <p className="font-bold">Dianne Russell</p>
                </div>
                <p>⭐⭐⭐⭐⭐</p>
                <p className="mb-3">
                  We enjoyed the Eggs Benedict served on homemade focaccia bread
                  and hot coffee.
                </p>
              </div>
              <div className="mb-4 border-b border-gray-600">
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={men1}
                    alt=""
                     className="w-[40px] h-[40px] bg-gray-600 rounded-full"
                  />
                  <p className="font-bold">Dianne Russell</p>
                </div>
                <p>⭐⭐⭐⭐⭐</p>
                <p className="mb-3">
                  We enjoyed the Eggs Benedict served on homemade focaccia bread
                  and hot coffee.
                </p>
              </div>
              <div className="mb-4 border-b border-gray-600">
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={suit}
                    alt=""
                    className="w-[40px] h-[40px] bg-gray-600 rounded-full"
                  />
                  <p className="font-bold">Jenny Wilson</p>
                </div>

                <p>⭐⭐⭐⭐</p>
                <p className="mb-3">
                  The food was excellent and so was the service.I had the
                  mushroom risotto with scallops which awesome.I had a burger
                  over greens which was also very good.
                </p>
              </div>
              <div className="mb-4">
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={deve}
                    alt=""
                    className="w-[40px] h-[40px] bg-gray-600 rounded-full"
                  />
                  <p className="font-bold">Dianne Russell</p>
                </div>
                <p>⭐⭐⭐⭐⭐</p>
                <p className="mb-3">
                  We enjoyed the Eggs Benedict served on homemade focaccia bread
                  and hot coffee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sample;
