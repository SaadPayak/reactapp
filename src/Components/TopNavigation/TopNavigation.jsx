import React, { useEffect, useState } from "react";
import NavigationBarMobile from "./NavigationBarMobile";
import NavigationBarDesktop from "./NavigationBarDesktop";

const TopNavigation = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 850);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 850);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <nav className="text-white fixed top-0 left-0 z-50 w-full px-5 py-3 flex  bg-black-main items-center justify-between">
      {!isSmallScreen ? <NavigationBarDesktop /> : <NavigationBarMobile />}
    </nav>
  );
};
export default TopNavigation;
