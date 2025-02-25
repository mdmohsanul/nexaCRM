import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import Lead_List from "../components/Leads/Lead_List";
import Lead_Filters from "../components/Leads/Lead_Filters";
import Header from "../components/Header";
import { fetchLeads } from "../features/leadSlice";
import List_Shimmer from "../components/Shimmer_UI/List_Shimmer";

const Leads = () => {
  const dispatch = useDispatch();
  const {
    leads,
    status,
    error,
    agentName,
    leadStatus,
    leadPriority,
    leadTimeToClose,
  } = useSelector((state) => state.lead);

  let priorityMap = { High: 1, Medium: 2, Low: 3 };
  const [filteredProducts, setFilteredProducts] = useState(leads);

  useEffect(() => {
    let filtered = leads;
    if (agentName) {
      filtered = filtered.filter((p) => p.salesAgent.name === agentName);
    }
    if (leadStatus) {
      filtered = filtered.filter((p) => p.status === leadStatus);
    }
    if (leadPriority === "High") {
      filtered = [...filtered].sort(
        (a, b) => priorityMap[a.priority] - priorityMap[b.priority]
      );
    }
    if (leadPriority === "Low") {
      filtered = [...filtered].sort(
        (a, b) => priorityMap[b.priority] - priorityMap[a.priority]
      );
    }
    if (leadTimeToClose === "Quickest to Close") {
      filtered = [...filtered].sort((a, b) => a.timeToClose - b.timeToClose);
    }
    if (leadTimeToClose === "Slowest to Close") {
      filtered = [...filtered].sort((a, b) => b.timeToClose - a.timeToClose);
    }

    setFilteredProducts(filtered);
  }, [agentName, leadStatus, leads, leadPriority, leadTimeToClose]);

  // useEffect(() => {
  //   dispatch(fetchLeads());
  // }, []);

  return (
    <>
      <section className="w-full md:pl-60">
        <div className="max-w-7xl mx-auto relative">
          <Header headerContent="Leads" />
          <div className="max-w-5xl mb-14 pt-36 md:pt-24 md:ml-10 mx-5">
            {status === "loading" && <List_Shimmer />}
            {error && <p>{error}</p>}
            {status === "success" && leads.length > 0 ? (
              <div>
                <Lead_Filters />
                <div className="flex flex-col ">
                  {filteredProducts?.map((item) => (
                    <Lead_List lead={item} key={item._id} />
                  ))}
                </div>
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
