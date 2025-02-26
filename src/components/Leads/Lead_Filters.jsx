import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams, Link } from "react-router";
import {
  leadPriorityFilter,
  leadStatusFilter,
  leadTimeToCloseFilter,
  salesAgentName,
} from "../../features/leadSlice";
import Time_To_Close from "../Filters/Time_To_Close";

const Lead_Filters = () => {
  const dispatch = useDispatch();
  const { agents } = useSelector((state) => state.agents);
  const leadStatusArr = [
    "New",
    "Contacted",
    "Qualified",
    "Proposal Sent",
    "Closed",
  ];
  const [selectPriority, setSelectPriority] = useState("");
  const [selectTimeToClose, setSelectTimeToClose] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  // Get filter values from the URL
  const salesAgent = searchParams.get("salesAgent") || "";
  const leadStatus = searchParams.get("leadStatus") || "";

  // Filter products based on URL params
  useEffect(() => {
    dispatch(salesAgentName(salesAgent));
    dispatch(leadStatusFilter(leadStatus));
    dispatch(leadPriorityFilter(selectPriority));
    dispatch(leadTimeToCloseFilter(selectTimeToClose));
  }, [salesAgent, leadStatus, selectPriority, selectTimeToClose]);

  // Update URL when filters change
  const updateFilters = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    setSearchParams(newParams);
  };
  return (
    <>
      <div className="flex flex-col md:flex-row gap-y-4 items-start md:items-center justify-start mb-6 border-b border-gray-300 pb-4">
        <div className="flex  flex-col gap-2.5 md:w-3/4 ">
          <div className="grid grid-cols-2 gap-y-2 md:grid-cols-9 items-center">
            <h1 className=" col-span-2 md:col-span-1 text-gray-800 font-medium">
              Filters:{" "}
            </h1>

            <label htmlFor="status" className="md:mr-6 mr-3 md:col-span-2 ">
              <select
                name="status"
                id="status"
                className="text-sm rounded-sm border border-gray-300  text-gray-700 p-2 md:w-40 w-36"
                onChange={(e) => updateFilters("leadStatus", e.target.value)}
                value={leadStatus}
              >
                <option value="">Status</option>
                {leadStatusArr.map((item, i) => (
                  <option key={i} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>

            <label htmlFor="agents" className="md:col-span-4">
              <select
                name="agents"
                id="agents"
                className="text-sm rounded-sm border border-gray-300  text-gray-700 py-2 px-2 md:w-40 w-36"
                onChange={(e) => updateFilters("salesAgent", e.target.value)}
                value={salesAgent}
              >
                <option value="">Sales Agent</option>
                {agents?.map((item) => (
                  <option key={item._id} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="grid grid-cols-2 gap-y-2 md:grid-cols-9 items-center">
            <h1 className=" col-span-2 md:col-span-1 text-gray-800 font-medium">
              Sort By:{" "}
            </h1>

            <label htmlFor="priority" className="mr-6 md:col-span-2 ">
              <select
                name="priority"
                id="priority"
                className="text-sm rounded-sm border border-gray-300  text-gray-700 p-2 md:w-40 w-36"
                value={selectPriority}
                onChange={(e) => setSelectPriority(e.target.value)}
              >
                <option value="">Priority</option>
                <option value="High">High</option>
                <option value="Low">Low</option>
              </select>
            </label>
            <Time_To_Close
              value={selectTimeToClose}
              setValue={setSelectTimeToClose}
            />
          </div>
        </div>

        <Link
          to="/addLead"
          className="bg-blue-600 text-white py-2 px-6  rounded-lg cursor-pointer hover:bg-blue-800"
        >
          + Add Lead
        </Link>
      </div>
    </>
  );
};

export default Lead_Filters;
