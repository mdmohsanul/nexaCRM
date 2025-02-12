import React from "react";
import Lead_Form from "../components/Lead_Form";

const AddNewLead = () => {
  return (
    <>
      <section className="w-full pl-60 ">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-center py-3 text-3xl text-white bg-[#1C4E80]">
            Add New Lead
          </h1>
          <Lead_Form />
        </div>
      </section>
    </>
  );
};

export default AddNewLead;
