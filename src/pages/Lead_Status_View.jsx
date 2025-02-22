import React from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import { GoClock } from "react-icons/go";
import { TbUsers } from "react-icons/tb";
import Header from "../components/Header";

const Lead_Status_View = () => {
  const { status } = useParams();
  const { leads, error } = useSelector((state) => state.lead);

  const leadByStatus = leads.filter((lead) => lead.status === status);
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

          <div className="pt-6 pl-10">
            <p className="text-xl text-gray-800">
              <span className="text-2xl text-gray-800 font-medium">
                Status:{" "}
              </span>{" "}
              {status}
            </p>
            <div className="h-16 bg-amber-500">Filters</div>
            <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg max-w-4xl my-5">
              {leadByStatus?.map((item, i) => (
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
