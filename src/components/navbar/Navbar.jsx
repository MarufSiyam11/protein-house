import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { IoMdHome } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { IoCartOutline } from "react-icons/io5";
import { MdArrowForwardIos } from "react-icons/md";
import logo from "../../assets/on-logo-white.svg";
function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = (e) => {
    e.stopPropagation();
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = (e) => {
    if (!e.target.closest("#sidebar") && isSidebarOpen) {
      setSidebarOpen(false);
    }
  };

  return (
    <section className="w-full fixed">
      <div className="hidden md:block bg-black lg:block h-[80px]">
        <div className="flex justify-around pt-4 w-full mx-auto bg-black text-white">
          <div className=" ">
            {" "}
            <img
              className="bg-black w-[180px]  h-[55px]  text-white"
              src={logo}
              alt=""
            />
          </div>
          <div className="relative ml-40">
            <input
              className=" py-3 px-3  text-black mt-2 outline-none text-xs w-[400px] pr-10 hidden md:block lg:block"
              placeholder="Search for Products"
              type="search"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 text-green-900 absolute right-3 top-1/2 transform -translate-y-1/2 hidden md:block lg:block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
          <div className="flex gap-5   p-3 ">
            <a className="pr-3" href="">
              Sign In /Register
            </a>
            <VscAccount className="text-2xl" />
            <IoCartOutline className="text-2xl" />
          </div>
        </div>
      </div>
      <div className="bg-black min-h-screen" onClick={closeSidebar}>
        <div className="h-screen flex overflow-hidden bg-gray-200">
          {/* Sidebar */}
          <div
            className={`absolute md:hidden  bg-white w-48 sm:w-56 min-h-screen overflow-y-auto transition-transform transform ease-in-out duration-300 ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } md:relative md:translate-x-0 md:w-64`}
            id="sidebar"
          >
            {/* Sidebar Content */}
            <div className="p-4 ">
              <div className="flex justify-between px-3 py-3 border-b-2 border-gray-300 md:border-none">
                <a href="/">
                  {" "}
                  <IoMdHome className="text-3xl" />
                </a>
                <a href="/">
                  {" "}
                  <RxCross2 className="text-3xl" />
                </a>
              </div>
              <ul className="mt-4">
                <li className="mb-2 flex justify-between pb-3 font-bold border-b-2 border-gray-300 md:border-none">
                  <a href="#" className="block hover:text-indigo-400">
                    Shop by Product
                  </a>
                  <MdArrowForwardIos className="mt-1" />
                </li>
                <li className="mb-2 flex justify-between pb-3 font-bold border-b-2 border-gray-300 md:border-none">
                  <a href="#" className="block hover:text-indigo-400">
                    Shop by Goal
                  </a>
                  <MdArrowForwardIos className="mt-1" />
                </li>
                <li className="mb-2 pb-3 font-bold border-b-2 border-gray-300 md:border-none">
                  <a href="#" className="block hover:text-indigo-400">
                    Articles
                  </a>
                </li>
                <li className="mb-2 pb-3 font-bold border-b-2 border-gray-300 md:border-none">
                  <a href="#" className="block hover:text-indigo-400">
                    Ambassaadors
                  </a>
                </li>
                <li className="mb-2 pb-3 font-bold border-b-2 border-gray-300 md:border-none">
                  <a href="#" className="block hover:text-indigo-400">
                    Recipes
                  </a>
                </li>
                <li className="mb-2 pb-3 font-bold border-b-2 border-gray-300 md:border-none">
                  <a href="#" className="block hover:text-indigo-400">
                    McLaren
                  </a>
                </li>
                <li className="mb-2 pb-3 font-bold border-b-2 border-gray-300 md:border-none">
                  <a href="#" className="block hover:text-indigo-400">
                    Our Quality
                  </a>
                </li>
                <li className="mb-2 pb-3 font-bold border-b-2 border-gray-300 md:border-none">
                  <a href="#" className="block hover:text-indigo-400">
                    Protein Calculator
                  </a>
                </li>
                <li className="mb-2 pb-3 font-bold border-b-2 border-gray-300 md:border-none">
                  <a href="#" className="block hover:text-indigo-400">
                    Sign In / Register
                  </a>
                </li>
                <li className="mb-2 pb-3 font-bold border-b-2 border-gray-300 md:border-none">
                  <a href="#" className="block hover:text-indigo-400">
                    Chose location
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Navbar */}
            <div className="bg-black shadow md:hidden">
              <div className="container mx-auto">
                {" "}
                <div className="flex justify-between items-center py-4 px-2">
                  <div className="flex justify-around w-full mx-auto bg-black text-white">
                    <div className=" ">
                      {" "}
                      <img
                        className="bg-black w-[180px]  h-[55px]  text-white"
                        src={logo}
                        alt=""
                      />
                      {/* <h3 className="font-semibold text-xl ">OPTIMUM NUTRITION</h3> */}
                    </div>

                    <div className="flex gap-2  md:gap-8 p-3 md:mr-10 ">
                      <a className="hidden md:block lg:block" href="">
                        Sign In /Register
                      </a>
                      <VscAccount className="text-2xl" />
                      <IoCartOutline className="text-2xl" />
                    </div>
                  </div>

                  <button
                    className="text-gray-500 hover:text-gray-600"
                    onClick={toggleSidebar}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {/* Content Body */}
            <div className="flex-1 bg-white overflow-auto p-4 hidden md:block lg:block">
              <ul className="mt-4 flex  gap-10 mx-auto justify-center">
                <li className="mb-2  pb-3 font-bold border-b-2 border-gray-300 md:border-none">
                  <a
                    href="#"
                    className="block  hover:bg-slate-400 hover:text-white p-2"
                  >
                    Shop by Product
                  </a>
                </li>
                <li className="mb-2  pb-3 font-bold border-b-2 border-gray-300 md:border-none">
                  <a
                    href="#"
                    className="block  hover:bg-slate-400 hover:text-white p-2"
                  >
                    Shop by Goal
                  </a>
                </li>
                <li className="mb-2 pb-3 font-bold border-b-2 border-gray-300 md:border-none">
                  <a
                    href="#"
                    className="block  hover:bg-slate-400 hover:text-white p-2"
                  >
                    Articles
                  </a>
                </li>
                <li className="mb-2 pb-3 font-bold border-b-2 border-gray-300 md:border-none">
                  <a
                    href="#"
                    className="block  hover:bg-slate-400 hover:text-white p-2"
                  >
                    Ambassaadors
                  </a>
                </li>
                <li className="mb-2 pb-3 font-bold border-b-2 border-gray-300 md:border-none">
                  <a
                    href="#"
                    className="block  hover:bg-slate-400 hover:text-white p-2"
                  >
                    Recipes
                  </a>
                </li>
                <li className="mb-2 pb-3 font-bold border-b-2 border-gray-300 md:border-none">
                  <a
                    href="#"
                    className="block  hover:bg-slate-400 hover:text-white p-2"
                  >
                    McLaren
                  </a>
                </li>
                <li className="mb-2 pb-3 font-bold border-b-2 border-gray-300 md:border-none">
                  <a
                    href="#"
                    className="block  hover:bg-slate-400 hover:text-white p-2"
                  >
                    Our Quality
                  </a>
                </li>
                <li className="mb-2 pb-3 font-bold border-b-2 border-gray-300 md:border-none">
                  <a
                    href="#"
                    className="block  hover:bg-slate-400 hover:text-white p-2"
                  >
                    Protein Calculator
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
