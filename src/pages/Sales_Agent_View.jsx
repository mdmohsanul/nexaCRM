import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import { GoClock } from "react-icons/go";
import { BsTag } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { FaDiagramProject } from "react-icons/fa6";
import Header from "../components/Header";
import Sales_Agent_Filter from "../components/Sales_Agent_Filter";

const Sales_Agent_View = () => {
  const { id } = useParams();
  const { leads } = useSelector((state) => state.lead);
  const { agents } = useSelector((state) => state.agents);

  const agentDetails = agents?.find((item) => item._id === id);
  const findSales = leads.filter((item) => item.salesAgent._id === id);

  const { filterStatus, filterPriority, filterTimeToClose } = useSelector(
    (state) => state.filters
  );
  const [sales, setSales] = useState(findSales);
  useEffect(() => {
    let filtered = findSales;
    if (filterStatus) {
      filtered = filtered.filter((item) => item.status === filterStatus);
    }
    if (filterPriority) {
      filtered = filtered.filter((item) => item.priority === filterPriority);
    }
    if (filterTimeToClose === "Quickest to Close") {
      filtered = [...filtered].sort((a, b) => a.timeToClose - b.timeToClose);
    }
    if (filterTimeToClose === "Slowest to Close") {
      filtered = [...filtered].sort((a, b) => b.timeToClose - a.timeToClose);
    }
    setSales(filtered);
  }, [filterStatus, filterPriority, filterTimeToClose]);

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
      <section className="w-full md:pl-60 ">
        <div className="max-w-7xl mx-auto">
          <Header headerContent="Sales Agent View" />

          <div className="mx-5 md:mx-10 mb-14 pt-36 md:pt-24 max-w-4xl">
            <div className="flex items-center justify-between md:mr-8 border-b border-gray-300 mb-4">
              <div className="text-xl font-medium flex items-center gap-4 py-4 text-gray-800">
                <span className="text-blue-600 bg-gray-200 p-2 rounded-full">
                  <FiUser size={22} />
                </span>{" "}
                <div className="font-normal">
                  <p className="text-xl font-medium text-gray-900">
                    {" "}
                    Sales Agent:
                  </p>
                  <p className="text-gray-600 text-xl"> {agentDetails?.name}</p>
                </div>
              </div>
              <div className="flex items-center text-gray-500 gap-3">
                <span className="text-gray-600">
                  <FaDiagramProject size={22} />
                </span>
                <p>
                  {findSales.length}
                  {"  "}leads
                </p>
              </div>
            </div>
            {/* Filters */}
            <Sales_Agent_Filter />

            {findSales?.length === 0 && (
              <div>
                <p>No, Lead found for this Sales Agent.</p>
                <Link to="/addLead">Go to create lead</Link>
              </div>
            )}
            {/* Filtered Leads */}
            <ul className="mt-7 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg  ">
              {sales?.map((lead, i) => (
                <div
                  key={lead._id}
                  className="
                border-b p-4 md:p-6 border-gray-200 text-gray-900 grid cursor-pointer grid-cols-5 md:grid-cols-8 gap-y-2  justify-items-start  items-center"
                >
                  <Link to={`/leads/${lead._id}`} className="col-span-3 ">
                    <p className="flex flex-col text-lg">
                      <span className="text-lg text-gray-800 hover:text-gray-600">
                        Lead: {lead.name}
                      </span>
                    </p>
                  </Link>

                  <p
                    className={`col-span-2 md:col-span-1 md:ml-0 ${
                      lead.status.length < 4 ? "ml-10" : "ml-0"
                    }`}
                  >
                    {getPriorityBadge(lead.status)}
                  </p>
                  <p className="flex items-center md:col-span-3 text-gray-500 text-[16px] col-span-3">
                    {" "}
                    <span className="pr-2">
                      <BsTag />
                    </span>{" "}
                    Priority: {lead.priority}
                  </p>
                  <p className="col-span-2 md:col-span-1 flex items-center justify-center text-gray-500">
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
