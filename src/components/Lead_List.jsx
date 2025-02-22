import React from "react";
import { RiEditBoxFill } from "react-icons/ri";
import { MdDeleteForever } from "react-icons/md";
import { GoClock } from "react-icons/go";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link } from "react-router";
import { deleteLead } from "../features/leadSlice";

const Lead_List = ({ lead }) => {
  const getStatusBadge = (status) => {
    const classes = {
      New: "bg-blue-100 text-blue-800",
      Contacted: "bg-yellow-100 text-yellow-800",
      Qualified: "bg-green-100 text-green-800",
      "Proposal Sent": "bg-emerald-100 text-emerald-800",
      Closed: "bg-gray-100 text-gray-800",
    };
    return (
      <span
        className={`text-xs font-medium px-2 py-1 rounded ${classes[status]}`}
      >
        {status}
      </span>
    );
  };
  const getPriorityBadge = (priority) => {
    const classes = {
      High: "bg-red-200 text-red-800",
      Medium: "bg-yellow-100 text-yellow-800",
      Low: "bg-green-100 text-green-700",
    };
    return (
      <span
        className={`text-xs font-medium px-2 py-1 rounded ${classes[priority]}`}
      >
        {priority}
      </span>
    );
  };
  return (
    <>
      {/* <div className=" rounded-md w-4xl h-14  grid cursor-pointer grid-cols-9 text-g justify-items-center content-center items-center bg-blue-600"></div> */}

      <div
        key={lead._id}
        className={` rounded-md   py-4 mb-3 pl-8 gap-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-gray-900 grid cursor-pointer grid-cols-10 text-g  items-center`}
      >
        <div className="col-span-3 text-lg">
          <Link to={`/leads/${lead._id}`}>
            <p className="">
              <span className="font-medium">Lead: </span> {lead.name}
            </p>
          </Link>
          <p className="text-sm">
            <span></span>
            <span>Priority: </span>
            <span>{getPriorityBadge(lead.priority)}</span>
          </p>
        </div>
        <p className="col-span-2 flex items-center gap-2 text-gray-600">
          <FaRegCircleUser /> {lead.salesAgent.name}
        </p>
        <p className="col-span-2">{getStatusBadge(lead.status)} </p>
        <p className="-ml-8 flex items-center gap-2 text-gray-600">
          <GoClock /> {lead.timeToClose} days
        </p>
        <div className="relative group flex items-center">
          <Link
            to="/addLead"
            state={lead}
            className="p-2 rounded-full bg-green-600 text-white hover:text-green-600 hover:bg-white cursor-pointer"
          >
            <RiEditBoxFill size={23} />
          </Link>

          {/* Tooltip */}
          <span className="absolute -top-5 right-0 ml-2 px-2 py-1 text-sm text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Edit
          </span>
        </div>
        <div className="relative group flex items-center">
          <button
            className="p-2 rounded-full bg-red-500 text-white hover:bg-white hover:text-red-500 cursor-pointer"
            onClick={() => dispatch(deleteLead(lead._id))}
          >
            <MdDeleteForever size={25} />
          </button>

          {/* Tooltip */}
          <span className="absolute -top-5 right-0 ml-2 px-2 py-1 text-sm text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Delete
          </span>
        </div>
      </div>
    </>
  );
};

export default Lead_List;
