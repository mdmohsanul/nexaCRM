import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useSelector } from "react-redux";
import { leadSrc, status, leadPriority } from "../data/leadFormData";
import Dropdown from "./Dropdown";

const Lead_Form = () => {
  const { agents } = useSelector((state) => state.agents);
  const [leadSource, setLeadSource] = useState("");
  const [salesAgent, setSalesAgent] = useState("");
  const [leadStatus, setLeadStatus] = useState("");
  const [priority, setPriority] = useState("");
  console.log(leadSource);
  //   console.log(agents);
  return (
    <>
      <div className="w-4xl h-auto border border-gray-200 rounded-md mx-auto mt-8">
        <form className="p-8">
          <div className="mb-3">
            <label htmlFor="name">Lead Name: </label>
            <div class="flex items-center rounded-md mt-2 bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
              <input
                type="text"
                name="name"
                id="name"
                class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                placeholder="janesmith"
              />
            </div>
          </div>
          <Dropdown
            options={leadSrc}
            label="Lead Source"
            value={leadSource}
            setValue={setLeadSource}
          />
          <Dropdown
            options={agents}
            label="Sales Agent"
            value={salesAgent}
            setValue={setSalesAgent}
          />
          <Dropdown
            options={status}
            label="Lead Status"
            value={leadStatus}
            setValue={setLeadStatus}
          />
          <Dropdown
            options={leadPriority}
            label="Priority"
            value={priority}
            setValue={setPriority}
          />

          <div className="mb-3">
            <label htmlFor="closeTime">Time to Close: </label>
            <div class="flex items-center rounded-md mt-2 bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
              <input
                type="number"
                name="closeTime"
                id="closeTime"
                class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                placeholder="0"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Lead_Form;
