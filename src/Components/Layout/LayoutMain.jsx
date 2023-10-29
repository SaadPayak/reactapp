import React, { useEffect, useState } from "react";
import TopNavigation from "../TopNavigation/TopNavigation";
import Sidebar from "../Sidebar/Sidebar";

const LayoutMain = (props) => {
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
    <div className="bg-black-main w-screen min-h-screen font-noto">
      <TopNavigation />
      <ContentHolder isSmallScreen={isSmallScreen}>
        {props.children}
      </ContentHolder>
    </div>
  );
};

const ContentHolder = ({ children, isSmallScreen }) => {
  return (
    <div className="w-full min-h-screen relative overflow-hidden mt-[72px] flex">
      {isSmallScreen ? (
        <>
          <div className="w-[100%] min-h-full  absolute right-0">
            {children}
          </div>
        </>
      ) : (
        <>
          <Sidebar />
          <div className="w-[80%] min-h-full absolute right-0">{children}</div>
        </>
      )}
    </div>
  );
};

export default LayoutMain;
