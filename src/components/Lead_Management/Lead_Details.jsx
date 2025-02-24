import React from "react";
import { Link } from "react-router";
import { FiLink } from "react-icons/fi";
import { TiEdit } from "react-icons/ti";
import { GoClock } from "react-icons/go";
import { TbUsers } from "react-icons/tb";
import { BsTag } from "react-icons/bs";

const Lead_Details = ({ findLead }) => {
  console.log(findLead);
  const getStatusBadge = (status) => {
    const classes = {
      New: "bg-blue-100 text-blue-800",
      Contacted: "bg-yellow-100 text-yellow-800",
      Qualified: "bg-green-100 text-green-800",
      "Proposal Sent": "bg-purple-100 text-purple-800",
      Closed: "bg-gray-100 text-gray-800",
    };

    return classes[status] || "bg-gray-100 text-gray-800";
  };
  return (
    <>
      <div className="max-w-3xl  my-4 ">
        {/* Main Content */}
        <div className="flex-1">
          {/* Lead Details Card */}
          <div className="">
            <div className="bg-white rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
              {/* Lead Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-y-4 items-center">
                  <h1 className="text-2xl font-bold text-gray-800 col-span-2">
                    {findLead?.name}
                  </h1>
                  <div className="flex items-center col-span-2 md:col-span-1">
                    <span
                      className={`text-xs font-medium px-2 py-1 rounded ${getStatusBadge(
                        findLead?.status
                      )}`}
                    >
                      {findLead?.status}
                    </span>
                  </div>

                  <Link
                    to="/addLead"
                    state={findLead}
                    className="flex items-center justify-center md:col-span-1 px-4 py-2 w-52 bg-blue-50 text-blue-700 rounded hover:bg-blue-100 transition-colors"
                  >
                    <TiEdit size={16} className="mr-2" />
                    Edit Lead Details
                  </Link>
                </div>
              </div>

              {/* Lead Details */}
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">
                      Lead Information
                    </h2>

                    <div className="space-y-4">
                      <div className="flex items-start">
                        <TbUsers
                          size={18}
                          className="text-gray-400 mt-1 mr-3"
                        />
                        <div>
                          <p className="text-sm text-gray-500">Sales Agent</p>
                          <p className="font-medium">
                            {" "}
                            {findLead?.salesAgent.name}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <FiLink size={18} className="text-gray-400 mt-1 mr-3" />
                        <div>
                          <p className="text-sm text-gray-500">Lead Source</p>
                          <p className="font-medium">{findLead?.source}</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <BsTag size={18} className="text-gray-400 mt-1 mr-3" />
                        <div>
                          <p className="text-sm text-gray-500">Priority</p>
                          <p className="font-medium">{findLead?.priority}</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <GoClock
                          size={18}
                          className="text-gray-400 mt-1 mr-3"
                        />
                        <div>
                          <p className="text-sm text-gray-500">Time to Close</p>
                          <p className="font-medium">{findLead?.timeToClose}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lead_Details;
