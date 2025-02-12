import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchLeads } from "../features/leadSlice";

const Lead_Management = () => {
  const { leadId } = useParams();
  const dispatch = useDispatch();
  const { leads } = useSelector((state) => state.lead);
  const findLead = leads?.find((lead) => lead._id === leadId);
  // const { name } = findLead;
  console.log(findLead);
  // useEffect(() => {
  //   dispatch(fetchLeads());
  // }, []);
  return (
    <>
      <section className="w-full pl-60 ">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-center py-3 text-3xl text-white bg-[#1C4E80]">
            Lead Management: [{findLead?.name}]
          </h1>
        </div>
      </section>
    </>
  );
};

export default Lead_Management;
