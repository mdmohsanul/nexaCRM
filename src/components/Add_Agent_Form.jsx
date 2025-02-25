import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addAgent } from "../features/agentsSlice";
import Input_Box from "./Forms/Input_Box";
import { ToastContainer, toast } from "react-toastify";

const Add_Agent_Form = ({ setOpenForm }) => {
  const dispatch = useDispatch();
  const [agentName, setAgentName] = useState("");
  const [agentEmail, setAgentEmail] = useState("");
  const [err, setErr] = useState("");
  const saveHandler = (e) => {
    if (!agentName || !agentEmail) {
      setErr("Please Fill all the details!");
    }
    dispatch(addAgent({ name: agentName, email: agentEmail }));

    setAgentEmail("");
    setAgentName("");
    toast.success("Agent added successfully");
  };
  return (
    <>
      <ToastContainer />
      <form className="p-5 md:p-8 " onSubmit={(e) => e.preventDefault()}>
        <Input_Box
          label="Name: "
          inputType="text"
          placeholder="Bob Johnson"
          name="agentName"
          value={agentName}
          setvalue={setAgentName}
        />
        <Input_Box
          label="Email: "
          inputType="email"
          placeholder="jane@gmail.com"
          name="agentEmail"
          value={agentEmail}
          setvalue={setAgentEmail}
        />
        {err && <p>{err}</p>}
        <button
          className={`py-2 px-5 text-white  mt-6 cursor-pointer bg-blue-600 rounded-lg hover:bg-blue-800`}
          onClick={saveHandler}
        >
          Save
        </button>
        <button
          className={`py-2 px-5  mt-6 cursor-pointer bg-gray-300 rounded-lg hover:bg-gray-400 ml-7`}
          onClick={() => setOpenForm(false)}
        >
          Cancel
        </button>
      </form>
    </>
  );
};

export default Add_Agent_Form;
