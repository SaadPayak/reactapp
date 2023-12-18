import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ApplicationRoutes from "./ApplicationRoutes";
import { ApplicationManagerProvider } from "./contexts/ApplicationContext";
import { PlayerProvider } from "./contexts/PlayerContext";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ApplicationManagerProvider>
      <UserProvider>
        <PlayerProvider>
          <BrowserRouter>
            <ApplicationRoutes>
              <App />
            </ApplicationRoutes>
          </BrowserRouter>
        </PlayerProvider>
      </UserProvider>
    </ApplicationManagerProvider>
  </React.StrictMode>
);
