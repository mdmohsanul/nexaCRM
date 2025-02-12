import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RiEditBoxFill } from "react-icons/ri";
import { MdDeleteForever } from "react-icons/md";
import Lead_Filters from "../components/Lead_Filters";
import { Link } from "react-router";
import { fetchLeads } from "../features/leadSlice";

const LeadList = () => {
  const { leads, status, error } = useSelector((state) => state.lead);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchLeads());
  }, []);
  return (
    <>
      <section className="w-full pl-60 ">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-center py-3 text-3xl text-white bg-[#1C4E80]">
            Leads
          </h1>
          <div className="h-14">
            <Lead_Filters />
          </div>
          <Link
            to="/addLead"
            className="bg-blue-600 text-white py-2 px-6 ml-28 cursor-pointer hover:bg-blue-800"
          >
            Add Lead
          </Link>
          <div className="px-7 mt-4">
            {status === "loading" && <p>Loading....</p>}
            {error && <p>{error}</p>}
            {status === "success" && (
              <div className="flex flex-col justify-center items-center">
                {leads.map((item, i) => (
                  <div
                    key={item._id}
                    className={`${
                      i % 2 === 0 ? "bg-amber-100" : "bg-blue-300"
                    } rounded-md w-4xl h-14 mb-3 grid cursor-pointer grid-cols-9 text-g justify-items-center content-center items-center`}
                  >
                    <p className="">{i + 1}.</p>
                    <Link to={`/leads/${item._id}`} className="col-span-3">
                      <p>{item.name}</p>
                    </Link>
                    <p className="col-span-3">{item.status}</p>

                    <div className="relative group flex items-center">
                      <button className="p-2 rounded-full bg-green-600 text-white hover:text-green-600 hover:bg-white cursor-pointer">
                        <RiEditBoxFill size={23} />
                      </button>

                      {/* Tooltip */}
                      <span className="absolute -top-5 right-0 ml-2 px-2 py-1 text-sm text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        Edit
                      </span>
                    </div>
                    <div className="relative group flex items-center">
                      <button className="p-2 rounded-full bg-red-500 text-white hover:bg-white hover:text-red-500 cursor-pointer">
                        <MdDeleteForever size={25} />
                      </button>

                      {/* Tooltip */}
                      <span className="absolute -top-5 right-0 ml-2 px-2 py-1 text-sm text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        Delete
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default LeadList;
