import React from "react";

const Status = ({ setValue, value }) => {
  const leadStatusArr = [
    "New",
    "Contacted",
    "Qualified",
    "Proposal Sent",
    "Closed",
  ];
  return (
    <>
      <label htmlFor="status" className="mr-6">
        <select
          name="status"
          id="status"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="text-sm rounded-sm border border-gray-300  text-gray-700 p-2 w-36 md:w-40"
        >
          <option value="">Status</option>
          {leadStatusArr.map((item, i) => (
            <option key={i} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
    </>
  );
};

export default Status;
