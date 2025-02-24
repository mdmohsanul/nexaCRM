import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import Add_Agent_Form from "../components/Add_Agent_Form";
import Header from "../components/Header";
import List_Shimmer from "../components/Shimmer_UI/List_Shimmer";
import { fetchAgents } from "../features/agentsSlice";
import { FiUser } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

const Sales_Agent = () => {
  const dispatch = useDispatch();
  const { agents, status, error } = useSelector((state) => state.agents);
  const [openForm, setOpenForm] = useState(false);

  useEffect(() => {
    dispatch(fetchAgents());
  }, []);

  if (!agents) {
    return <p>{error}</p>;
  }
  return (
    <>
      <section className="w-full md:pl-60 ">
        <div className="max-w-7xl mx-auto">
          <Header headerContent="Sales Agent Management" />

          <div className="pt-36 md:pt-24 mx-5 md:mx-10 mb-14">
            {status === "loading" && <List_Shimmer />}
            {status === "success" && (
              <div className="max-w-3xl">
                <div className=" h-auto  border border-gray-200    ">
                  <button
                    className="py-4 inline bg-gray-300 pl-8 text-start w-full "
                    onClick={() => setOpenForm(!openForm)}
                  >
                    + Add Agent
                  </button>
                  {openForm && <Add_Agent_Form setOpenForm={setOpenForm} />}
                </div>

                <ul className="mt-7">
                  {agents?.map((agent, i) => (
                    <li
                      key={agent._id}
                      className={`shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md group  p-3  mb-3 grid cursor-pointer gap-y-3 grid-cols-1 md:grid-cols-2 text-g justify-items-start content-center items-center`}
                    >
                      <Link to={`/salesAgents/${agent._id}`} className="">
                        <p className="flex items-center gap-2 text-gray-800 group-hover:text-gray-600">
                          <span className="text-blue-600 bg-gray-200 p-2 rounded-full">
                            <FiUser size={22} />
                          </span>{" "}
                          <span>Sales Agent: </span>
                          <span>{agent.name}</span>
                        </p>
                      </Link>
                      <p className="flex items-center gap-2 text-gray-700">
                        <span className="text-blue-600 bg-gray-200 p-2 rounded-full">
                          <MdOutlineEmail size={22} />
                        </span>{" "}
                        <span> {agent.email}</span>
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Sales_Agent;
