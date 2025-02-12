import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import nexaLogo from "/NexaCRM-logo.svg";
import { sidebarList } from "../data/sidebar";
import { Link } from "react-router";

const Sidebar = () => {
  //const sidebarList = ["Leads", "Sales", "Agents", "Reports", "Settings"];
  return (
    <>
      <div className="w-60 min-h-screen bg-[#F1F1F1] fixed left-0 top-0 ">
        <Link to="/">
          <img src={nexaLogo} alt="" className="w-52 pt-3 pl-7" />
        </Link>
        <ul className=" pt-14     text-lg text-gray-800 ">
          {sidebarList.map((item) => (
            <Link to={`/${item.linkName}`} key={item.id}>
              {" "}
              <li className="flex items-center justify-between pb-2 mb-4 border-b border-gray-400 cursor-pointer">
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
