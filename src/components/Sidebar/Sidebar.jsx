import React, { useState } from "react";
import nexaLogo from "/NexaCRM-logo.svg";
import { Link } from "react-router";
import { Hamburger, Cross } from "../../data/react_Icons";
import Sidebar_List from "./Sidebar_List";

const Sidebar = () => {
  const [activeStatus, setActiveStatus] = useState("Dashboard");
  const [nav, setNav] = useState(false);
  return (
    <>
      <div>
        {/* Top Navbar - only visible in mobile View */}
        <div className="md:hidden w-full h-14 fixed top-0 bg-white left-0 z-40 border-b-[1px] border-gray-400">
          <div className="flex items-center justify-between px-4 py-2.5">
            <button className="text-black" onClick={() => setNav(!nav)}>
              {nav ? <Cross size={30} /> : <Hamburger size={30} />}
            </button>

            <Link to="/">
              <img src={nexaLogo} alt="nexaLogo" className="w-44 -ml" />
            </Link>
          </div>
        </div>
        {/* Mobile View */}
        <div
          className={`fixed top-14 left-0 h-full w-72 bg-gray-900 text-white shadow-lg z-40 
        transform transition-transform duration-300 ease-in-out border-none
        ${nav ? "translate-x-0" : "-translate-x-full"}`}
        >
          <Sidebar_List
            activeStatus={activeStatus}
            setActiveStatus={setActiveStatus}
            setNav={setNav}
          />
        </div>
        {/* Desktop View */}
        <div className="hidden md:flex">
          <div className="w-60 min-h-screen bg-[#F1F1F1] fixed left-0 top-0 ">
            <Link to="/">
              <img src={nexaLogo} alt="nexaLogo" className="w-52 pt-3 pl-7" />
            </Link>
            <Sidebar_List
              activeStatus={activeStatus}
              setActiveStatus={setActiveStatus}
              setNav={setNav}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
