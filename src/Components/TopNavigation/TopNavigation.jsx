import React, { useEffect, useState } from "react";
import NavigationBarMobile from "./NavigationBarMobile";
import NavigationBarDesktop from "./NavigationBarDesktop";

const TopNavigation = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 750);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 750);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <nav className="text-white px-5 py-3 flex bg-green-00 items-center justify-between">
      {!isSmallScreen ? <NavigationBarDesktop /> : <NavigationBarMobile />}
    </nav>
  );
};
export default TopNavigation;
