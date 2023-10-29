import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ApplicationRoutes from "./ApplicationRoutes";
import LayoutMain from "./Components/Layout/LayoutMain";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LayoutMain>
      <ApplicationRoutes>
        <App />
      </ApplicationRoutes>
    </LayoutMain>
  </React.StrictMode>
);
