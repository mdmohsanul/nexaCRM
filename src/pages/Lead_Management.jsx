import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router";
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
            Lead Management:{" "}
            <span className="text-2xl">[{findLead?.name}]</span>
          </h1>
          <div className="max-w-3xl mx-auto mt-6">
            <h2 className="text-center text-2xl text-gray-800">Lead Details</h2>
            <div className="border border-gray-300 rounded-md p-6 my-7 text-gray-700 text-xl">
              <p>
                <span className="font-semibold"> Lead Name: </span>{" "}
                {findLead?.name}
              </p>
              <p>
                {" "}
                <span className="font-semibold"> Sales Agent: </span>{" "}
                {findLead?.salesAgent?.name}
              </p>
              <p>
                {" "}
                <span className="font-semibold"> Lead Source: </span>{" "}
                {findLead?.source}
              </p>
              <p>
                {" "}
                <span className="font-semibold"> Lead Status: </span>{" "}
                {findLead?.status}
              </p>
              <p>
                {" "}
                <span className="font-semibold"> Priority: </span>{" "}
                {findLead?.priority}
              </p>
              <p>
                {" "}
                <span className="font-semibold">Time to Close: </span>{" "}
                {findLead?.timeToClose} Days
              </p>
            </div>
            <Link
              to="/addLead"
              state={findLead}
              className="py-2 px-5 bg-green-600 text-white mb-5 cursor-pointer hover:bg-green-800"
            >
              Edit Lead
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Lead_Management;
