import React from "react";
import Priority from "./Filters/Priority";
import Status from "./Filters/Status";
import Time_To_Close from "./Filters/Time_To_Close";

const Leads_Agent_Filter = () => {
  return (
    <>
      <div className="flex items-center justify-between mb-6 border-b border-gray-300 pb-4">
        <div className="flex  flex-col gap-2.5">
          <div className="flex items-center">
            <h1 className="pr-2  text-gray-800 font-medium">Filters: </h1>
            <Status />
            <Priority />
          </div>
          <div className="flex items-center">
            <h1 className="mr-3 text-gray-800 font-medium">Sort By: </h1>
            <Time_To_Close />
          </div>
        </div>
      </div>
    </>
  );
};

export default Leads_Agent_Filter;
