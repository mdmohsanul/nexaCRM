import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router";

import Lead_Details from "../components/Lead_Management/Lead_Details";
import Header from "../components/Header";
import Lead_Comments from "../components/Lead_Management/Lead_Comments";

const Lead_Management = () => {
  const { leadId } = useParams();

  const { leads } = useSelector((state) => state.lead);

  const findLead = leads?.find((lead) => lead._id === leadId);

  return (
    <>
      <section className="w-full md:pl-60 ">
        <div className="max-w-7xl mx-auto">
          <Header headerContent="Lead Management" leadName={findLead?.name} />

          <div className="md:pt-20 mb-14 pt-32 mx-5 md:mx-10">
            {/* Lead Details of a particular lead */}
            <Lead_Details findLead={findLead} />
            {/* Comments  */}
            <Lead_Comments findLead={findLead} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Lead_Management;
