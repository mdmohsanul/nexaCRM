import React from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import { GoClock } from "react-icons/go";
import { BsTag } from "react-icons/bs";
import { FiUser } from "react-icons/fi";

const Sales_Agent_View = () => {
  const { id } = useParams();
  const { leads } = useSelector((state) => state.lead);
  const { agents } = useSelector((state) => state.agents);

  const agentDetails = agents?.find((item) => item._id === id);
  const findSales = leads.filter((item) => item.salesAgent._id === id);

  const getPriorityBadge = (priority) => {
    const classes = {
      New: "bg-blue-100 text-blue-800",
      Contacted: "bg-yellow-100 text-yellow-800",
      Qualified: "bg-green-100 text-green-800",
      "Proposal Sent": "bg-purple-100 text-purple-800",
      Closed: "bg-gray-100 text-gray-800",
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
      <section className="w-full pl-60 ">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-center py-3 text-3xl text-white bg-[#1C4E80]">
            Sales Agent View
          </h1>
          <div className="pl-10 pt-7">
            <h1 className=" text-2xl font-medium text-gray-800">
              Lead List By Agent
            </h1>

            <h1 className="text-xl font-medium flex items-center gap-2 py-4 text-gray-800">
              <span className="text-blue-600 bg-gray-200 p-2 rounded-full">
                <FiUser size={22} />
              </span>
              Sales Agent:{" "}
              <span className="font-normal">{agentDetails?.name}</span>
            </h1>
            <h2 className="text-xl pt-5">Lead Assigned:</h2>
            {findSales?.length === 0 && (
              <div>
                <p>No, Lead found for this Sales Agent.</p>
                <Link to="/addLead">Go to create lead</Link>
              </div>
            )}
            <ul className="mt-7 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg max-w-4xl ">
              {findSales?.map((lead, i) => (
                <div
                  key={lead._id}
                  className="
               px-6 border-b py-5 border-gray-200 text-gray-900 grid cursor-pointer grid-cols-9 gap-8 justify-items-start  items-center"
                >
                  <Link to={`/leads/${lead._id}`} className="col-span-4">
                    <p className="flex flex-col">
                      <span className="text-lg text-gray-800">
                        Lead: {lead.name}
                      </span>
                      <span className="flex items-center  text-gray-500 text-[16px]">
                        {" "}
                        <span className="pr-2">
                          <BsTag />
                        </span>{" "}
                        Priority: {lead.priority}
                      </span>
                    </p>
                  </Link>

                  <p className="col-span-3">{getPriorityBadge(lead.status)}</p>
                  <p className="col-span-2 flex items-center justify-center text-gray-500">
                    <span className="pr-2">
                      <GoClock />
                    </span>{" "}
                    {lead.timeToClose} days
                  </p>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sales_Agent_View;
