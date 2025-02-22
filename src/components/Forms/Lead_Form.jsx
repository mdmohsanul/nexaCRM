import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { leadSrc, status, leadPriorityData } from "../../data/leadFormData";
import { addLead, fetchLeads, updateLead } from "../../features/leadSlice";
import Dropdown from "./Dropdown";
import Input_Box from "./Input_Box";
import Multi_Select_Dropdown from "./Multi_Select_Dropdown";
import { ToastContainer, toast } from "react-toastify";

const Lead_Form = ({ existingData = null }) => {
  const navigate = useNavigate();
  const { agents } = useSelector((state) => state.agents);
  const dispatch = useDispatch();
  const [leadName, setLeadName] = useState(existingData?.name || "");
  const [leadSource, setLeadSource] = useState(existingData?.source || "");
  const [leadSalesAgent, setLeadSalesAgent] = useState(
    existingData?.salesAgent || ""
  );
  const [leadStatus, setLeadStatus] = useState(existingData?.status || "");
  const [leadPriority, setLeadPriority] = useState(
    existingData?.priority || ""
  );
  const [closeTime, setCloseTime] = useState(existingData?.timeToClose || "");
  const [selectedTags, setSelectedTags] = useState(existingData?.tags || []);
  const [err, setErr] = useState("");

  function formValidation() {
    if (
      !leadName.trim() ||
      !leadSource ||
      !leadSalesAgent ||
      !leadStatus ||
      !leadPriority ||
      !closeTime
    ) {
      setErr("Please fill out all required fields.");
      return null;
    }
    // Ensure closeTime is a valid number
    const parsedCloseTime = parseInt(closeTime, 10);
    if (isNaN(parsedCloseTime) || parsedCloseTime <= 0) {
      setErr("Time to Close must be a valid positive number.");
      return null;
    }

    // Clear error message if validation passes
    setErr("");

    return {
      name: leadName.trim(),
      timeToClose: parsedCloseTime,
      source: leadSource,
      salesAgent: leadSalesAgent,
      status: leadStatus,
      priority: leadPriority,
      tags: selectedTags,
    };
  }
  function clearForm() {
    setLeadName("");
    setLeadSource("");
    setLeadSalesAgent("");
    setLeadStatus("");
    setLeadPriority("");
    setCloseTime("");
    setSelectedTags([]);
    setErr("");
  }
  const updateHandler = () => {
    const data = formValidation();
    if (data) {
      dispatch(updateLead({ id: existingData._id, ...data }));
      clearForm();
      toast.success("Lead updated successfully!");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  };
  const saveHandler = () => {
    const data = formValidation();
    console.log("");
    if (data) {
      dispatch(addLead(data));
      dispatch(fetchLeads());
      clearForm();
      toast.success("Lead added successfully!");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  };

  return (
    <>
      <div className="w-4xl h-auto  mx-auto mt-24">
        <ToastContainer />
        <form
          className="p-8 mb-7 border border-gray-200 rounded-md"
          onSubmit={(e) => e.preventDefault()}
        >
          <Input_Box
            label="Lead Name"
            inputType="text"
            placeholder="Intuit Info."
            name="leadName"
            value={leadName}
            setvalue={setLeadName}
          />
          <Dropdown
            options={leadSrc}
            label="Lead Source"
            value={leadSource}
            name="leadSource"
            setValue={setLeadSource}
          />
          <Dropdown
            options={agents}
            label="Sales Agent"
            value={leadSalesAgent}
            setValue={setLeadSalesAgent}
          />
          <Dropdown
            options={status}
            label="Lead Status"
            value={leadStatus}
            name="leadStatus"
            setValue={setLeadStatus}
          />
          <Dropdown
            options={leadPriorityData}
            label="Priority"
            value={leadPriority}
            name="priority"
            setValue={setLeadPriority}
          />
          <Input_Box
            label="Time to Close"
            inputType="number"
            placeholder="0"
            name="closeTime"
            value={closeTime}
            setvalue={setCloseTime}
          />
          <Multi_Select_Dropdown
            selected={selectedTags}
            setSelected={setSelectedTags}
          />
          {err && <p>{err}</p>}
          <button
            className={`py-2 px-5 text-white  mt-6 cursor-pointer rounded-lg ${
              existingData
                ? "bg-green-600 hover:bg-green-700"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
            onClick={existingData ? updateHandler : saveHandler}
          >
            {existingData ? "Update Lead" : "Add Lead"}
          </button>
        </form>
      </div>
    </>
  );
};

export default Lead_Form;
