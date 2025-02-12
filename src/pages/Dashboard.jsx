import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLeads } from "../features/leadSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { leads, status, error } = useSelector((state) => state.lead);
  console.log(leads);
  const leadStatus = Object.entries(
    leads.reduce((acc, curr) => {
      // if (curr.status in acc) {
      //   acc[curr.status] = acc[curr.status] + 1;
      // } else {
      //   acc[curr.status] = 1;
      // }
      acc[curr.status] = (acc[curr.status] || 0) + 1;
      return acc;
    }, {})
  ).map((item) => ({ status: item[0], count: item[1] }));
  console.log(leadStatus);
  useEffect(() => {
    dispatch(fetchLeads());
  }, []);
  return (
    <>
      <section className="w-full pl-60 ">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-center py-3 text-3xl text-white bg-[#1C4E80]">
            Dashboard
          </h1>
          <div className="px-7 mt-8">
            <h2 className="text-xl">Lead Status</h2>
            {leadStatus?.map(({ status, count }, i) => (
              <li key={i}>
                {status} [{count}] leads
              </li>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
