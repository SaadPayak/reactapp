import React, { createContext, useContext, useState } from "react";

const ApplicationManagerContext = createContext();

export const useApplicationManager = () => {
  const context = useContext(ApplicationManagerContext);
  if (!context) {
    throw new Error(
      "useApplicationManager must be used within a ApplicationManagerProvider"
    );
  }
  return context;
};

export const ApplicationManagerProvider = ({ children }) => {
  // Desktop Options
  // ---

  // Mobile Options
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

  // Global Options
  const [selectedMenubarItemId, setSelectedMenubarItemId] = useState(1);

  const value = {
    isMobileMenuActive,
    setIsMobileMenuActive,

    selectedMenubarItemId,
    setSelectedMenubarItemId,
  };
  return (
    <ApplicationManagerContext.Provider value={value}>
      {children}
    </ApplicationManagerContext.Provider>
  );
};
