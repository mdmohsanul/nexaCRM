import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { GoClock } from "react-icons/go";
import { TbUsers } from "react-icons/tb";
import Header from "../components/Header";
import Lead_Status_Filter from "../components/Lead_Status_Filter";

const Lead_Status_View = () => {
  const { status } = useParams();
  const { leads, error } = useSelector((state) => state.lead);
  const { filterSalesAgent, filterPriority, filterTimeToClose } = useSelector(
    (state) => state.filters
  );

  const leadByStatus = leads.filter((lead) => lead.status === status);
  const [filteredLeads, setFilteredLeads] = useState(leadByStatus);
  useEffect(() => {
    let filtered = leadByStatus;
    if (filterSalesAgent) {
      filtered = filtered.filter(
        (item) => item.salesAgent.name === filterSalesAgent
      );
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
    setFilteredLeads(filtered);
  }, [filterSalesAgent, filterPriority, filterTimeToClose]);

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
      <section className="w-full pl-60 ">
        <div className="max-w-7xl mx-auto">
          <Header headerContent="Leads by Status" />

          <div className="pt-24 pl-10 max-w-4xl ">
            <p className="text-xl text-gray-800 mb-4">
              <span className="text-xl text-gray-800 font-medium">
                Status:{" "}
              </span>{" "}
              {status}
            </p>
            <div className="">
              <Lead_Status_Filter />
            </div>
            <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg  my-5">
              {filteredLeads?.map((item, i) => (
                <div
                  key={item._id}
                  className="
               px-6 border-b py-5 border-gray-200 text-gray-900 grid cursor-pointer grid-cols-9 gap-8 justify-items-start  items-center"
                >
                  <Link to={`/leads/${item._id}`} className="col-span-4">
                    <p className="flex flex-col">
                      <span className="text-lg text-gray-800">
                        Lead: {item.name}
                      </span>
                      <span className="flex items-center justify-center text-gray-500 text-[16px]">
                        {" "}
                        <span className="pr-2">
                          <TbUsers />
                        </span>{" "}
                        Sales Agent: {item.salesAgent.name}
                      </span>
                    </p>
                  </Link>

                  <p className="col-span-3">
                    {getPriorityBadge(item.priority)}
                  </p>
                  <p className="col-span-2 flex items-center justify-center text-gray-500">
                    <span className="pr-2">
                      <GoClock />
                    </span>{" "}
                    {item.timeToClose} days
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Lead_Status_View;
