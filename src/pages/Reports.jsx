import React from "react";
import Header from "../components/Header";
import { Bar, Doughnut, Pie } from "react-chartjs-2";
import "chart.js/auto";
import {
  Chart,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { useSelector } from "react-redux";

// Register required Chart.js components
Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
const Reports = () => {
  const { leads } = useSelector((state) => state.lead);
  const leadByStatus = leads.reduce((acc, curr) => {
    acc[curr.status] = (acc[curr.status] || 0) + 1;
    return acc;
  }, {});
  const leadClosed = leads.filter((item) => item.status === "Closed");

  const leadClosedByAgents = leadClosed.reduce((acc, curr) => {
    acc[curr.salesAgent.name] = (acc[curr.salesAgent.name] || 0) + 1;
    return acc;
  }, {});
  const leadsAssignedToAgent = leads.reduce((acc, curr) => {
    acc[curr.salesAgent.name] = (acc[curr.salesAgent.name] || 0) + 1;
    return acc;
  }, {});
  const chartData = {
    labels: Object.keys(leadByStatus),
    datasets: [
      {
        label: "Lead Status Distribution",
        data: Object.values(leadByStatus),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50"],
      },
    ],
  };
  const chartDataLeadClosed = {
    labels: Object.keys(leadClosedByAgents),
    datasets: [
      {
        label: "Lead Status Distribution",
        data: Object.values(leadClosedByAgents),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50"],
      },
    ],
  };
  const doughnutData = {
    labels: ["Closed", "In-Pipeline"],
    datasets: [
      {
        label: "Leads",
        data: [leadClosed.length, leads.length - leadClosed.length],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
        hoverBorderWidth: 2,
        hitRadius: 4,
      },
    ],
  };

  const pieData = {
    labels: Object.keys(leadsAssignedToAgent),
    datasets: [
      {
        label: "Leads",
        data: Object.values(leadsAssignedToAgent),
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
          "rgb(210, 154, 86)",
          "rgb(159, 205, 76)",
        ],
        hoverOffset: 4,
        hoverBorderWidth: 2,
        hitRadius: 4,
      },
    ],
  };
  const chartOptions = {
    responsive: true,
    scales: {
      y: { beginAtZero: true },
    },
  };
  return (
    <>
      <section className="w-full md:pl-60">
        <div className="max-w-7xl mx-auto relative">
          <div className="fixed top-0 left-60 right-0 bg-white z-10">
            <div className="max-w-7xl mx-auto">
              <Header headerContent="Report Overview" />
            </div>
          </div>
          <div className="max-w-3xl mx-5 md:mx-10 pt-24 md:pt-6 mb-10">
            <div className="grid md:grid-flow-col  md:grid-rows-2 gap-5 pt-24 justify-items-center place-items-center mb-9">
              <div className="  border border-gray-200 shadow-[-1px_-1px_37px_1px_#00000024] rounded-lg p-7">
                <p className="text-center pb-4 text-gray-700 text-xl font-medium">
                  Total Leads closed and in Pipeline{" "}
                </p>
                <Doughnut data={doughnutData} />
              </div>
              <div className=" border border-gray-200 shadow-[-1px_-1px_37px_1px_#00000024] rounded-lg p-12 ">
                <p className="text-center pb-4 text-gray-700 text-xl font-medium">
                  Leads Assigned to Agents{" "}
                </p>
                <Pie data={pieData} />
              </div>
              <div className="  border border-gray-200 shadow-[-1px_-1px_37px_1px_#00000024] rounded-lg py-7 px-3">
                <p className="text-center pb-4 text-gray-700 text-xl font-medium">
                  Lead Status Distribution{" "}
                </p>
                <Bar
                  data={chartData}
                  style={{ width: "480px", height: "500px" }}
                />
              </div>
              <div className="  border border-gray-200 shadow-[-1px_-1px_37px_1px_#00000024] rounded-lg py-7 px-3">
                <p className="text-center pb-4 text-gray-700 text-xl font-medium">
                  Leads Closed by Sales Agent
                </p>
                <Bar
                  data={chartDataLeadClosed}
                  style={{ width: "480px", height: "500px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reports;
