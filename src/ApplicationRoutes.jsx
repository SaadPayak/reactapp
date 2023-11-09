import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Top10 from "./pages/Top10/Top10";

const ApplicationRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/top-10" element={<Top10 />} />
    </Routes>
  );
};

export default ApplicationRoutes;
