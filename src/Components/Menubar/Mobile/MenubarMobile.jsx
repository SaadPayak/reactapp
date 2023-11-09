import React from "react";
import { menubarItems } from "../../../data/Menubar/MenubarData";
import { AnimatePresence } from "framer-motion";
import { useApplicationManager } from "../../../contexts/ApplicationContext";
import { MenubarItemMobile } from "./MenubarItemMobile";
import PlaylistsMobile from "./PlaylistsMobile";

const MenubarMobile = () => {
  const { selectedMenubarItemId, setSelectedMenubarItemId } =
    useApplicationManager();
  return (
    <div className=" bg-[#0a0a0a4f] backdrop-blur-md text-white-text-main fixed left-0 top-0 z-[10000] mt-[72px] w-[100%] max-h-screen overflow-y-scroll pb-28 ">
      <div className="w-full min-h-screen p-5 ">
        {menubarItems.map((obj, index) => {
          let tailwindClass = "mt-0";
          if (index > 0) {
            tailwindClass = "mt-5";
          }
          return (
            <div className={tailwindClass}>
              <h1 className="mb-3 ml-10 text-xs font-bold text-gray-500">
                {obj.category}
              </h1>
              <AnimatePresence mode="wait">
                {obj.items.map((item) => {
                  return (
                    <MenubarItemMobile
                      key={item.id}
                      id={item.id}
                      icon={item.icon}
                      title={item.title}
                      iconColor={item.iconColor}
                      isSelected={item.id === selectedMenubarItemId}
                      setSelectedMenubarItemId={setSelectedMenubarItemId}
                    />
                  );
                })}
              </AnimatePresence>
            </div>
          );
        })}
        <PlaylistsMobile />
      </div>
    </div>
  );
};

export default MenubarMobile;
