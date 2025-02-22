import React from "react";

const Time_To_Close = () => {
  return (
    <>
      <label htmlFor="closeTime">
        <select
          name="closeTime"
          id="closeTime"
          className="text-sm rounded-sm border border-gray-300  text-gray-700 p-2 w-40"
        >
          <option value="">Time To Close</option>
          <option value="High">High</option>
          <option value="Low">Low</option>
        </select>
      </label>
    </>
  );
};

export default Time_To_Close;
