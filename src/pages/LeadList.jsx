import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Lead_Filters from "../components/Lead_Filters";

import { Link, useNavigate } from "react-router";
import { deleteLead, fetchLeads } from "../features/leadSlice";
import Lead_List from "../components/Lead_List";
import Header from "../components/Header";

const LeadList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { leads, status, error, agentName, leadStatus } = useSelector(
    (state) => state.lead
  );

  const [filteredProducts, setFilteredProducts] = useState(leads);
  useEffect(() => {
    let filtered = leads;

    if (agentName) {
      filtered = filtered.filter((p) => p.salesAgent.name === agentName);
    }

    if (leadStatus) {
      filtered = filtered.filter((p) => p.status === leadStatus);
    }

    setFilteredProducts(filtered);
  }, [agentName, leadStatus, leads]);

  // useEffect(() => {
  //   dispatch(fetchLeads());
  // }, [dispatch]);
  return (
    <>
      <section className="w-full pl-60 ">
        <div className="max-w-7xl mx-auto ">
          <Header headerContent="Leads" />
          <div className="max-w-4xl mt-6 ml-10">
            <Lead_Filters />

            {status === "loading" && <p>Loading....</p>}
            {error && <p>{error}</p>}
            {status === "success" && (
              <div className="flex flex-col ">
                {filteredProducts?.map((item) => (
                  <Lead_List lead={item} key={item._id} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default LeadList;
