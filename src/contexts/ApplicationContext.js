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
  const [fullScreenPopCenter, setFullScreenPopCenter] = useState({
    isActive: false,
    Component: null,
  });

  // Mobile Options
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

  // Global Options
  const [selectedMenubarItemId, setSelectedMenubarItemId] = useState(1);

  // Desktop helper functions
  const activatePopupCenter = (component) => {
    setFullScreenPopCenter({ isActive: true, component });
  };
  const deactivatePopupCenter = () => {
    setFullScreenPopCenter({ isActive: false, component: null });
  };

  const value = {
    fullScreenPopCenter,
    setFullScreenPopCenter,

    isMobileMenuActive,
    setIsMobileMenuActive,

    selectedMenubarItemId,
    setSelectedMenubarItemId,

    activatePopupCenter,
    deactivatePopupCenter,
  };
  return (
    <ApplicationManagerContext.Provider value={value}>
      {children}
    </ApplicationManagerContext.Provider>
  );
};
