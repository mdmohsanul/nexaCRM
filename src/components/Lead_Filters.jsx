import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router";

const Lead_Filters = () => {
  const { agents } = useSelector((state) => state.agents);
  const { leads, status, error } = useSelector((state) => state.lead);
  const [searchParams, setSearchParams] = useSearchParams("");

  // Get filter values from the URL
  const salesAgent = searchParams.get("salesAgent") || "";
  const leadStatus = searchParams.get("leadStatus") || "";

  // Filter products based on URL params
  // useEffect(() => {
  //   let filtered = leads;

  //   if (salesAgent) {
  //     filtered = filtered.filter((p) => p.category === category);
  //   }

  //   if (leadStatus) {
  //     filtered = filtered.filter((p) => p.price >= Number(minPrice));
  //   }

  //   setFilteredProducts(filtered);
  // }, [salesAgent, leadStatus]);
  return (
    <>
      <div className="flex">
        <h1>Filters: </h1>
        <div>
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
        <div>
          <label htmlFor="agents">Sales Agents: </label>
          <select name="agents" id="agents">
            <option value="">Select Agent</option>
            {agents?.map((item) => (
              <option key={item._id} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default Lead_Filters;
