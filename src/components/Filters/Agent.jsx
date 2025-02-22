import React from "react";
import { useSelector } from "react-redux";

const Agent = () => {
  const { agents } = useSelector((state) => state.agents);
  return (
    <>
      <label htmlFor="agents">
        <select
          name="agents"
          id="agents"
          className="text-sm rounded-sm border border-gray-300  text-gray-700 py-2 px-2 w-40"
        >
          <option value="">Sales Agent</option>
          {agents?.map((item) => (
            <option key={item._id} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </label>
    </>
  );
};

export default Agent;
