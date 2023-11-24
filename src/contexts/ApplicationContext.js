import React, { createContext, useContext, useEffect, useState } from "react";

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

  const [navbarVisibleFullScreenPopup, setNavbarVisibleFullScreenPopup] =
    useState({
      isActive: false,
      Component: null,
    });

  // Mobile Options
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

  // Global Options
  const [selectedMenubarItemId, setSelectedMenubarItemId] = useState(1);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 850);
  // When Menu opened in mobile and then if we switch to desktop, then going back to mobile still shows that menu open. RESET MOBILE STATES
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 850);
      if (window.innerWidth <= 850) {
        // Deactivate any popups if a user switches from large to small screen using browser responsive option.
        // Reason for adding: When song description in desktop mode was enabled and when switched to mobile version using browser's responsive option, the desktop version of song description continued to persist even in the mobile version. (Mobile has its own version of Song Description)
        deactivatePopupCenter();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Desktop helper functions
  const activatePopupCenter = (component) => {
    setFullScreenPopCenter({ isActive: true, component });
  };
  const deactivatePopupCenter = () => {
    setFullScreenPopCenter({ isActive: false, component: null });
  };

  const activateNavbarVisiblePopup = (component) => {
    setNavbarVisibleFullScreenPopup({ isActive: true, component });
  };
  const deactivateNavbarVisiblePopup = () => {
    setNavbarVisibleFullScreenPopup({ isActive: false, component: null });
  };

  const value = {
    fullScreenPopCenter,
    setFullScreenPopCenter,

    navbarVisibleFullScreenPopup,
    setNavbarVisibleFullScreenPopup,

    isMobileMenuActive,
    setIsMobileMenuActive,

    selectedMenubarItemId,
    setSelectedMenubarItemId,
    isSmallScreen,

    activatePopupCenter,
    deactivatePopupCenter,

    activateNavbarVisiblePopup,
    deactivateNavbarVisiblePopup,
  };
  return (
    <ApplicationManagerContext.Provider value={value}>
      {children}
    </ApplicationManagerContext.Provider>
  );
};
