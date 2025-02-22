import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Lead_Filters from "../components/Lead_Filters";
import { Link } from "react-router";
import Lead_List from "../components/Lead_List";
import Header from "../components/Header";
import { fetchLeads } from "../features/leadSlice";
import List_Shimmer from "../components/Shimmer_UI/List_Shimmer";

const Leads = () => {
  const dispatch = useDispatch();
  const { leads, status, error, agentName, leadStatus } = useSelector(
    (state) => state.lead
  );
  console.log("render");
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
  // }, []);

  return (
    <>
      <section className="w-full pl-60">
        <div className="max-w-7xl mx-auto relative">
          <Header headerContent="Leads" />
          <div className="max-w-4xl pt-24 ml-10">
            {status === "loading" && <List_Shimmer />}
            {error && <p>{error}</p>}
            <Lead_Filters />
            {status === "success" && leads.length > 0 ? (
              <div className="flex flex-col ">
                {filteredProducts?.map((item) => (
                  <Lead_List lead={item} key={item._id} />
                ))}
              </div>
            ) : (
              <div>
                <p className="text-2xl text-gray-800 font-semibold">
                  No Leads found! Create new lead.
                </p>
                <Link
                  to="/addLead"
                  className="bg-blue-600 text-white py-2 px-6 ml-10 rounded-lg cursor-pointer mr-10 hover:bg-blue-800"
                >
                  + Add Lead
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Leads;
