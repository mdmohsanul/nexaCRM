import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import nexaLogo from "/NexaCRM-logo.svg";
import { sidebarList } from "../data/sidebar";
import { Link, useParams } from "react-router";

const Sidebar = () => {
  const [activeStatus, setActiveStatus] = useState("Dashboard");
  return (
    <>
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
    </>
  );
};

export default Sidebar;
