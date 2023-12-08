import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Top10 from "./pages/Top10/Top10";
import Artist from "./pages/Artists/Artist/Artist";
import Artists from "./pages/Artists/Artists";
import Liked from "./pages/Liked/Liked";
import Uncover from "./pages/Uncover/Uncover";

const ApplicationRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/artists" element={<Artists />} />
      <Route path="/artists/:id" element={<Artist />} />
      <Route path="/top-10" element={<Top10 />} />
      <Route path="/liked" element={<Liked />} />
      <Route path="/uncover" element={<Uncover />} />
    </Routes>
  );
};

export default ApplicationRoutes;
