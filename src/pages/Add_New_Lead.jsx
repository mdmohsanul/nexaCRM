import React from "react";
import Lead_Form from "../components/Forms/Lead_Form";
import { useLocation } from "react-router";
import Header from "../components/Header";

const Add_New_Lead = () => {
  // get data pass by URL
  const location = useLocation();
  const data = location.state;

  return (
    <>
      <section className="w-full pl-60 ">
        <div className="max-w-7xl mx-auto">
          <Header headerContent="Add New Lead" />

          {/* If we click on edit then we will pass the entire data as props  */}
          {data ? <Lead_Form existingData={data} /> : <Lead_Form />}
        </div>
      </section>
    </>
  );
};

export default Add_New_Lead;
