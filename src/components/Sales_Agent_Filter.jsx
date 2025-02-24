import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Priority from "./Filters/Priority";
import Status from "./Filters/Status";
import Time_To_Close from "./Filters/Time_To_Close";
import {
  setFilterPriority,
  setFilterStatus,
  setFilterTimeToClose,
} from "../features/filtersSlice";

const Sales_Agent_Filter = () => {
  const dispatch = useDispatch();
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");
  const [timeToClose, setTimeToClose] = useState("");
  useEffect(() => {
    dispatch(setFilterStatus(status));
    dispatch(setFilterPriority(priority));
    dispatch(setFilterTimeToClose(timeToClose));
  }, [status, priority, timeToClose]);
  return (
    <>
      <div className="flex items-center justify-between mb-6 border-b border-gray-300 pb-4">
        <div className="flex  flex-col gap-2.5">
          <div className="flex items-center">
            <h1 className="pr-2  text-gray-800 font-medium">Filters: </h1>
            <Status value={status} setValue={setStatus} />
            <Priority value={priority} setValue={setPriority} />
          </div>
          <div className="flex items-center">
            <h1 className="mr-3 text-gray-800 font-medium">Sort By: </h1>
            <Time_To_Close value={timeToClose} setValue={setTimeToClose} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sales_Agent_Filter;
