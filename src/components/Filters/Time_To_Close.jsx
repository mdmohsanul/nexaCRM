import React from "react";

const Time_To_Close = ({ setValue, value }) => {
  return (
    <>
      <label htmlFor="closeTime">
        <select
          name="closeTime"
          id="closeTime"
          className="text-sm rounded-sm border border-gray-300  text-gray-700 p-2  w-36 md:w-40"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        >
          <option value="">Time To Close</option>
          <option value="Quickest to Close">Quickest to Close</option>
          <option value="Slowest to Close">Slowest to Close</option>
        </select>
      </label>
    </>
  );
};

export default Time_To_Close;
