import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Top10 from "./pages/Top10/Top10";
import Artist from "./pages/Artists/Artist/Artist";
import Artists from "./pages/Artists/Artists";

const ApplicationRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/artists" element={<Artists />} />
      <Route path="/artists/:id" element={<Artist />} />
      <Route path="/top-10" element={<Top10 />} />
    </Routes>
  );
};

export default ApplicationRoutes;
