import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import nexaLogo from "/NexaCRM-logo.svg";
import { sidebarList } from "../data/sidebar";
import { Link, useParams } from "react-router";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Sidebar = () => {
  const [activeStatus, setActiveStatus] = useState("Dashboard");
  const [nav, setNav] = useState(false);
  return (
    <>
      <div>
        <div className="md:hidden w-full h-14 fixed top-0 bg-white left-0 z-40">
          <div className="flex items-center justify-between px-8 py-2.5">
            <button className="text-black" onClick={() => setNav(!nav)}>
              {nav ? <RxCross2 size={30} /> : <GiHamburgerMenu size={30} />}
            </button>

            <Link to="/">
              <img src={nexaLogo} alt="nexaLogo" className="w-44 -ml" />
            </Link>
          </div>
        </div>

        <div
          className={`fixed top-14 left-0 h-full w-72 bg-gray-900 text-white shadow-lg z-40 
        transform transition-transform duration-300 ease-in-out border-none
        ${nav ? "translate-x-0" : "-translate-x-full"}`}
        >
          <ul className=" pt-14 text-lg text-white border-none">
            {sidebarList.map((item) => (
              <Link to={`/${item.linkName}`} key={item.id}>
                {" "}
                <li
                  onClick={() => {
                    setActiveStatus(item.name);
                    setNav(false);
                  }}
                  className={`flex items-center justify-between py-2 mb-4  cursor-pointer 
                ${
                  activeStatus === item.name
                    ? "bg-white text-blue-700 font-medium"
                    : "text-gray-200 hover:bg-gray-400"
                }
                `}
                >
                  <p className="pl-10">{item.name}</p>{" "}
                  <span className="mr-6">
                    <IoIosArrowForward />
                  </span>
                </li>
              </Link>
            ))}
          </ul>
        </div>

        <div className="hidden md:flex">
          <div className="w-60 min-h-screen bg-[#F1F1F1] fixed left-0 top-0 ">
            <Link to="/">
              <img src={nexaLogo} alt="nexaLogo" className="w-52 pt-3 pl-7" />
            </Link>
            <ul className=" pt-14 text-lg text-gray-800 ">
              {sidebarList.map((item) => (
                <Link to={`/${item.linkName}`} key={item.id}>
                  {" "}
                  <li
                    onClick={() => setActiveStatus(item.name)}
                    className={`flex items-center justify-between py-2 mb-4  cursor-pointer 
                ${
                  activeStatus === item.name
                    ? "bg-white text-blue-700 font-medium"
                    : "text-gray-600 hover:bg-gray-400"
                }
                `}
                  >
                    <p className="pl-10">{item.name}</p>{" "}
                    <span className="mr-6">
                      <IoIosArrowForward />
                    </span>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
