import React from "react";

const Priority = () => {
  return (
    <>
      <label htmlFor="priority">
        <select
          name="priority"
          id="priority"
          className="text-sm rounded-sm border border-gray-300  text-gray-700 p-2 w-40"
        >
          <option value="">Priority</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </label>
    </>
  );
};

export default Priority;
