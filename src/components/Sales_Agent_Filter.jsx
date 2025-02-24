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
        <div className="flex flex-col gap-y-3">
          <div className="grid grid-cols-2 gap-y-2 md:grid-cols-9 items-center">
            <h1 className="col-span-2 md:col-span-1 text-gray-800 font-medium">
              Filters:{" "}
            </h1>
            <div className="mr-3 md:col-span-2">
              {" "}
              <Status value={status} setValue={setStatus} />
            </div>
            <Priority value={priority} setValue={setPriority} />
          </div>
          <div className="grid grid-cols-2 gap-y-2 md:grid-cols-9 items-center">
            <h1 className="col-span-2 md:col-span-1 text-gray-800 font-medium">
              Sort By:{" "}
            </h1>
            <div className="md:col-span-2">
              {" "}
              <Time_To_Close
                value={timeToClose}
                setValue={setTimeToClose}
              />{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sales_Agent_Filter;
