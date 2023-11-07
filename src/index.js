import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ApplicationRoutes from "./ApplicationRoutes";
import LayoutMain from "./Components/Layout/LayoutMain";
import { ApplicationManagerProvider } from "./contexts/ApplicationContext";
import { PlayerProvider } from "./contexts/PlayerContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApplicationManagerProvider>
      <PlayerProvider>
        <LayoutMain>
          <ApplicationRoutes>
            <App />
          </ApplicationRoutes>
        </LayoutMain>
      </PlayerProvider>
    </ApplicationManagerProvider>
  </React.StrictMode>
);
