import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLeads } from "../features/leadSlice";
import { leadStatusIcon } from "../data/leadStatusIcon";
import { Link } from "react-router";
import Header from "../components/Header";

import Box_Shimmer from "../components/Shimmer_UI/Box_Shimmer";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { leads, status, error } = useSelector((state) => state.lead);

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

  useEffect(() => {
    dispatch(fetchLeads());
  }, []);

  // In leadStatus array we are adding icons to every object
  function combineLeadWithIcons(arr1, arr2) {
    return arr1.map((item, i) => ({ ...item, linkIcon: arr2[i] }));
  }
  const updateLeads = combineLeadWithIcons(leadStatus, leadStatusIcon);
  if (error) {
    return <p>{error}</p>;
  }
  return (
    <>
      <section className="w-full md:pl-60 ">
        <div className="max-w-7xl mx-auto ">
          <Header headerContent="Dashboard" />

          <div className="pt-36 md:pt-24 md:pl-10 px-7 max-w-5xl mx-auto">
            {status === "loading" && <Box_Shimmer />}
            {/* {status === "success" && (
             
            )} */}
            <div>
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-medium text-gray-900  ">
                  Lead Status
                </h2>
                <Link
                  to="/addLead"
                  className="bg-blue-600 text-white py-2 md:px-6 px-4 md:ml-10 rounded-lg cursor-pointer md:mr-10 hover:bg-blue-800"
                >
                  + Add Lead
                </Link>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-7 my-5 ">
                {updateLeads?.map((item, i) => (
                  <Link to={`/leadStatus/${item.status}`} key={i}>
                    <div className=" md:w-48 w-36 md:py-6 py-4 flex flex-col items-center md:gap-3 gap-2 justify-center cursor-pointer shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[-4px_14px_25px_13px_#00000024]">
                      <span>
                        {
                          <item.linkIcon.icon
                            size={50}
                            className={` text-white ${item.linkIcon.class} py-3 px-3 rounded-full `}
                          />
                        }
                      </span>
                      <p className="text-gray-800 font-medium">{item.status}</p>
                      <p>
                        {" "}
                        <span className="text-2xl text-gray-700 font-medium">
                          {item.count}{" "}
                        </span>
                        leads
                      </p>
                    </div>
                  </Link>
                ))}{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
