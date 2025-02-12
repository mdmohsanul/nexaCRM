import React from "react";

const Lead_Filters = () => {
  return (
    <>
      <div className="flex">
        <h1>Filters: </h1>

        <label htmlFor="status">
          Status:
          <select name="status" id="status" className="text-sm rounded-md">
            <option value="New">New</option>
            <option value="Contacted">Contacted</option>
            <option value="Qualified">Qualified</option>
            <option value="Proposal Sent">Proposal Sent</option>
            <option value="Closed">Closed</option>
          </select>
        </label>
      </div>
    </>
  );
};

export default Lead_Filters;
