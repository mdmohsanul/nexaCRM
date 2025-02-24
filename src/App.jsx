import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createBrowserRouter, Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import { fetchAgents } from "./features/agentsSlice";
import { fetchLeads } from "./features/leadSlice";
import Add_New_Lead from "./pages/Add_New_Lead";
import Dashboard from "./pages/Dashboard";
import Error_Page from "./pages/Error_Page";
import Leads from "./pages/Leads";
import Lead_Management from "./pages/Lead_Management";
import Lead_Status_View from "./pages/Lead_Status_View";
import Reports from "./pages/Reports";
import Sales_Agent from "./pages/Sales_Agent";
import Sales_Agent_View from "./pages/Sales_Agent_View";
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
        element: <Leads />,
      },
      {
        path: "/leads/:leadId",
        element: <Lead_Management />,
      },
      {
        path: "/addLead",
        element: <Add_New_Lead />,
      },
      {
        path: "/salesAgents",
        element: <Sales_Agent />,
      },
      {
        path: "/salesAgents/:id",
        element: <Sales_Agent_View />,
      },
      {
        path: "/leadStatus/:status",
        element: <Lead_Status_View />,
      },
      {
        path: "/reports",
        element: <Reports />,
      },
      {
        path: "/test",
        element: <Test />,
      },
      {
        path: "*",
        element: <Error_Page />,
      },
    ],
  },
]);
export default appRouter;
