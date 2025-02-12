import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createBrowserRouter, Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import { fetchAgents } from "./features/agentsSlice";
import { fetchLeads } from "./features/leadSlice";
import AddNewLead from "./pages/AddNewLead";
import Dashboard from "./pages/Dashboard";
import LeadList from "./pages/LeadList";
import Lead_Management from "./pages/Lead_Management";
import Test from "./pages/Test";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchLeads());
    dispatch(fetchAgents());
  }, []);
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
}
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/leads",
        element: <LeadList />,
      },
      {
        path: "/leads/:leadId",
        element: <Lead_Management />,
      },
      {
        path: "/addLead",
        element: <AddNewLead />,
      },
      {
        path: "/test",
        element: <Test />,
      },
    ],
  },
]);
export default appRouter;
