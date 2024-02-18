import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Top10 from "./pages/Top10/Top10";
import Artist from "./pages/Artists/Artist/Artist";
import Artists from "./pages/Artists/Artists";
import Liked from "./pages/Liked/Liked";
import Uncover from "./pages/Uncover/Uncover";
import Authentication from "./pages/Authentication/Authentication";
import { useUser } from "./contexts/UserContext";
import LayoutMain from "./Components/Layout/LayoutMain";
import { Toaster } from "react-hot-toast";
import Account from "./pages/Account/Account";
import SongHistory from "./pages/History/SongHistory";

const RoutesWrapper = () => {
  const { user } = useUser();

  return (
    <>
      <Toaster
        toastOptions={{
          className: "bg-black",
          style: {
            background: "#181818",
            color: "#fff",
          },
        }}
      />
      <Routes>
        {user ? (
          <>
            <Route path="/" element={<Dashboard />} />
            <Route path="/artists" element={<Artists />} />
            <Route path="/artists/:id" element={<Artist />} />
            <Route path="/top-10" element={<Top10 />} />
            <Route path="/liked" element={<Liked />} />
            <Route path="/uncover" element={<Uncover />} />
            <Route path="/account" element={<Account />} />
            <Route path="/history" element={<SongHistory />} />

            <Route path="/auth" element={<Navigate to="/" replace />} />
          </>
        ) : (
          <>
            <Route path="/auth" element={<Authentication />} />

            <Route path="/" element={<Navigate to="/auth" replace />} />
            <Route path="/artists" element={<Navigate to="/auth" replace />} />
            <Route
              path="/artists/:id"
              element={<Navigate to="/auth" replace />}
            />
            <Route path="/top-10" element={<Navigate to="/auth" replace />} />
            <Route path="/liked" element={<Navigate to="/auth" replace />} />
            <Route path="/uncover" element={<Navigate to="/auth" replace />} />
            <Route path="/account" element={<Navigate to="/auth" replace />} />
            <Route path="/history" element={<Navigate to="/auth" replace />} />
          </>
        )}
      </Routes>
    </>
  );
};

const ApplicationRoutes = () => {
  const { user } = useUser();

  if (user) {
    return (
      <LayoutMain>
        <RoutesWrapper />
      </LayoutMain>
    );
  }

  return <RoutesWrapper />;
};

export default ApplicationRoutes;
