import React from "react";
import { useSelector } from "react-redux";
import Agent from "./Filters/Agent";
import Priority from "./Filters/Priority";

import Time_To_Close from "./Filters/Time_To_Close";

const Lead_Status_Filter = () => {
  // const {leads} = useSelector(state => state.lead)
  // useEffect(() => {

  //     return () => {

  //     };
  // }, []);
  return (
    <>
      <div className="flex items-center justify-between mb-6 border-b border-gray-300 pb-4">
        <div className="flex  flex-col gap-2.5">
          <div className="flex items-center gap-4">
            <h1 className="pr-2  text-gray-800 font-medium">Filters: </h1>
            <Agent />
            <Priority />
          </div>
          <div className="flex items-center gap-1">
            <h1 className="mr-3 text-gray-800 font-medium">Sort By: </h1>
            <Time_To_Close />
          </div>
        </div>
      </div>
    </>
  );
};

export default Lead_Status_Filter;
