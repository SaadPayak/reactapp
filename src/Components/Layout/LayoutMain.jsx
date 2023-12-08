import React from "react";
import TopNavigation from "../TopNavigation/TopNavigation";
import Menubar from "../Menubar/Menubar";
import MenubarMobile from "../Menubar/Mobile/MenubarMobile";
import { useApplicationManager } from "../../contexts/ApplicationContext";
import { PlaylistsProvider } from "../../contexts/PlaylistsContext";
import FullScreenPopupCenter from "../Reusables/FullScreenPopupCenter";
import { Toaster } from "react-hot-toast";
import FullScreenPopupCenterMobile from "../Reusables/mobile/FullScreenPopupCenterMobile";
import NavbarVisibleFullScreenPopup from "../Reusables/NavbarVisibleFullScreenPopup";
import Player2 from "../Player/Player";
// import PlayerMobile from "../Player/mobile/PlayerMobile";

const LayoutMain = (props) => {
  // When Menu opened in mobile and then if we switch to desktop, then going back to mobile still shows that menu open. RESET MOBILE STATES

  return (
    <PlaylistsProvider>
      <div
        className="bg-black-main w-screen max-h-screen overflow-y-scroll
       font-lexend "
      >
        <TopNavigation />
        <div class="fixed top-0 left-1/2 -translate-x-1/2 z-[10000000] w-full">
          <Toaster />
        </div>

        <ContentHolder>{props.children}</ContentHolder>
      </div>
    </PlaylistsProvider>
  );
};

const ContentHolder = ({ children }) => {
  const { isMobileMenuActive, isSmallScreen } = useApplicationManager();
  return (
    <div className="w-full min-h-screen relative  mt-[72px] flex ">
      {isSmallScreen ? (
        <>
          <FullScreenPopupCenterMobile />
          <NavbarVisibleFullScreenPopup />
        </>
      ) : (
        <>
          <FullScreenPopupCenter />
          <NavbarVisibleFullScreenPopup />
        </>
      )}
      {isSmallScreen ? (
        <>
          {isMobileMenuActive && <MenubarMobile />}
          {/* <FullScreenPopupCenterMobile /> */}
          <div className="w-[100%] min-h-full absolute right-0 p-5 pb-32">
            {children}
          </div>
        </>
      ) : (
        <>
          <Menubar />
          {/* <FullScreenPopupCenter /> */}
          <div className="w-[75%] lg:w-[80%] min-h-full absolute right-0 p-5 px-10 pb-32">
            {children}
          </div>
        </>
      )}
      <Player2 isSmallScreen={isSmallScreen} />
      {/* <Player isSmallScreen={isSmallScreen} /> */}
    </div>
  );
};

export default LayoutMain;
