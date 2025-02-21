import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLeads } from "../features/leadSlice";
import { leadStatusIcon } from "../data/leadStatusIcon";
import { Link } from "react-router";
import Header from "../components/Header";

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
  console.log(leadStatus);
  useEffect(() => {
    dispatch(fetchLeads());
  }, []);

  // In leadStatus array we are adding icons to every object
  function combineLeadWithIcons(arr1, arr2) {
    return arr1.map((item, i) => ({ ...item, linkIcon: arr2[i] }));
  }
  const updateLeads = combineLeadWithIcons(leadStatus, leadStatusIcon);
  if (error) {
    return <p>error</p>;
  }
  return (
    <>
      <section className="w-full pl-60 ">
        <div className="max-w-7xl mx-auto ">
          <Header headerContent="Dashboard" />

          <div className="pt-6 pl-10">
            <h2 className="text-2xl font-medium text-gray-900 pb-6 ">
              Lead Status
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 ">
              {updateLeads?.map((item, i) => (
                <Link to={`/leadStatus/${item.status}`} key={i}>
                  <div className=" w-48 py-6 flex flex-col items-center gap-3 justify-center cursor-pointer shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_3px_10px_rgb(0,0,0,0.4)]">
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
      </section>
    </>
  );
};

export default Dashboard;
