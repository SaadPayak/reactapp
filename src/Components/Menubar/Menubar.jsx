import React from "react";
import { AnimatePresence } from "framer-motion";
import { MenubarItem } from "./MenubarItem";
import { menubarItems } from "../../data/Menubar/MenubarData";
import { useApplicationManager } from "../../contexts/ApplicationContext";
import Playlists from "./Playlists";
import Copyright from "./Copyright";

const Menubar = () => {
  const { selectedMenubarItemId, setSelectedMenubarItemId } =
    useApplicationManager();

  return (
    <div className="menubar-scrollbar text-white-text-main fixed left-0 top-0 mt-[72px] w-[20%] max-h-screen overflow-y-scroll pb-28 ">
      <div className="w-full min-h-screen p-5 ">
        {menubarItems.map((obj, index) => {
          let tailwindClass = "mt-0 border-b-[1px] border-black-ultra-light";
          if (index > 0) {
            tailwindClass = "mt-5 border-b-[1px] border-black-ultra-light";
          }
          return (
            <>
              <div className={tailwindClass}>
                <h1 className="mb-3 text-xs font-bold text-gray-600">
                  {obj.category}
                </h1>
                <AnimatePresence mode="wait">
                  {obj.items.map((item) => {
                    return (
                      <MenubarItem
                        key={item.id}
                        id={item.id}
                        icon={item.icon}
                        title={item.title}
                        navigationUrl={item.navigationUrl}
                        iconColor={item.iconColor}
                        isSelected={item.id === selectedMenubarItemId}
                        setSelectedMenubarItemId={setSelectedMenubarItemId}
                      />
                    );
                  })}
                </AnimatePresence>
              </div>
            </>
          );
        })}
        <Playlists />
        <Copyright />
      </div>
    </div>
  );
};

export default Menubar;
