import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import Add_Agent_Form from "../components/Add_Agent_Form";
import Header from "../components/Header";
import { fetchAgents } from "../features/agentsSlice";
import AddAgent from "./AddAgent";

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
      <section className="w-full pl-60 ">
        <div className="max-w-7xl mx-auto">
          <Header headerContent="Sales Agent Management" />

          {status === "loading" && <p>Loading.....</p>}
          {status === "success" && (
            <div className="pl-10 pt-24">
              <h1 className="text-2xl font-bold text-gray-900 pb-7">
                Sales Agent List
              </h1>
              <div className="w-2xl h-auto  border border-gray-200   ">
                <button
                  className="py-4 inline bg-gray-300 pl-8 text-start w-full"
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
                    className={`${
                      i % 2 === 0 ? "bg-amber-100" : "bg-blue-300"
                    } rounded-md w-4xl h-14 mb-3 grid cursor-pointer grid-cols-9 text-g justify-items-center content-center items-center`}
                  >
                    <p className="">{i + 1}.</p>
                    <Link
                      to={`/salesAgents/${agent._id}`}
                      className="col-span-3"
                    >
                      <p>{agent.name}</p>
                    </Link>
                    <p className="col-span-3"> {agent.email}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Sales_Agent;
