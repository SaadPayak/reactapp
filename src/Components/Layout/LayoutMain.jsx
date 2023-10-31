import React, { useEffect, useState } from "react";
import TopNavigation from "../TopNavigation/TopNavigation";
import Menubar from "../Menubar/Menubar";
import MenubarMobile from "../Menubar/Mobile/MenubarMobile";
import { useApplicationManager } from "../../contexts/ApplicationContext";
import { PlaylistsProvider } from "../../contexts/PlaylistsContext";
import FullScreenPopupCenter from "./FullScreenPopupCenter";

const LayoutMain = (props) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 850);
  // When Menu opened in mobile and then if we switch to desktop, then going back to mobile still shows that menu open. RESET MOBILE STATES
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
    <PlaylistsProvider>
      <div className="bg-black-main w-screen min-h-screen font-noto">
        <TopNavigation />
        <ContentHolder isSmallScreen={isSmallScreen}>
          {props.children}
        </ContentHolder>
      </div>
    </PlaylistsProvider>
  );
};

const ContentHolder = ({ children, isSmallScreen }) => {
  const { isMobileMenuActive } = useApplicationManager();
  return (
    <div className="w-full min-h-screen relative overflow-hidden mt-[72px] flex">
      {isSmallScreen ? (
        <>
          {isMobileMenuActive && <MenubarMobile />}
          <div className="w-[100%] min-h-full absolute right-0 p-5">
            {children}
          </div>
        </>
      ) : (
        <>
          <Menubar />
          <FullScreenPopupCenter />
          <div className="w-[80%] min-h-full absolute right-0 p-5">
            {children}
          </div>
        </>
      )}
    </div>
  );
};

export default LayoutMain;
