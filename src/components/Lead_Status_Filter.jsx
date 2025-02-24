import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Agent from "./Filters/Agent";
import Priority from "./Filters/Priority";

import Time_To_Close from "./Filters/Time_To_Close";

import {
  setFilterPriority,
  setFilterSalesAgent,
  setFilterTimeToClose,
} from "../features/filtersSlice";

const Lead_Status_Filter = () => {
  const dispatch = useDispatch();
  const [agent, setAgent] = useState("");
  const [priority, setPriority] = useState("");
  const [timeToClose, setTimeToClose] = useState("");

  useEffect(() => {
    dispatch(setFilterSalesAgent(agent));
    dispatch(setFilterPriority(priority));
    dispatch(setFilterTimeToClose(timeToClose));
  }, [agent, priority, timeToClose]);

  return (
    <>
      <div className="flex items-center justify-between mb-6 border-b border-gray-300 pb-4">
        <div className="flex  flex-col gap-2.5">
          <div className="grid grid-cols-2 gap-y-2 md:grid-cols-9 items-center">
            <h1 className=" col-span-2 md:col-span-1 text-gray-800 font-medium">
              Filters:{" "}
            </h1>
            <div className="pr-3 md:col-span-2">
              <Agent value={agent} setValue={setAgent} />
            </div>
            <Priority value={priority} setValue={setPriority} />
          </div>
          <div className="grid grid-cols-2 gap-y-2 md:grid-cols-9 items-center">
            <h1 className="mr-3  col-span-2 md:col-span-1 text-gray-800 font-medium">
              Sort By:{" "}
            </h1>
            <div className="md:col-span-2">
              <Time_To_Close value={timeToClose} setValue={setTimeToClose} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lead_Status_Filter;
