import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ApplicationRoutes from "./ApplicationRoutes";
import LayoutMain from "./Components/Layout/LayoutMain";
import { ApplicationManagerProvider } from "./contexts/ApplicationContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApplicationManagerProvider>
      <LayoutMain>
        <ApplicationRoutes>
          <App />
        </ApplicationRoutes>
      </LayoutMain>
    </ApplicationManagerProvider>
  </React.StrictMode>
);
