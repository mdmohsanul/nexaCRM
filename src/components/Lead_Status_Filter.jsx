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
          <div className="flex items-center gap-4">
            <h1 className="pr-2  text-gray-800 font-medium">Filters: </h1>
            <Agent value={agent} setValue={setAgent} />
            <Priority value={priority} setValue={setPriority} />
          </div>
          <div className="flex items-center gap-1">
            <h1 className="mr-3 text-gray-800 font-medium">Sort By: </h1>
            <Time_To_Close value={timeToClose} setValue={setTimeToClose} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Lead_Status_Filter;
