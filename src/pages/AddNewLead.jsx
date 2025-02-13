import React from "react";
import Lead_Form from "../components/Forms/Lead_Form";
import { useLocation } from "react-router";
const AddNewLead = () => {
  const location = useLocation();
  const data = location.state;
  console.log(data);
  return (
    <>
      <section className="w-full pl-60 ">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-center py-3 text-3xl text-white bg-[#1C4E80]">
            Add New Lead
          </h1>
          {data ? <Lead_Form existingData={data} /> : <Lead_Form />}
        </div>
      </section>
    </>
  );
};

export default AddNewLead;
