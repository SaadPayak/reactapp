import {
  faBars,
  faMagnifyingGlass,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import NavigationLogo from "./NavigationLogo";
import NavigationAvatar from "./NavigationAvatar";
import { useApplicationManager } from "../../contexts/ApplicationContext";

const NavigationBarMobile = () => {
  const [isSearchActivated, setIsSearchActivated] = useState(false);
  const { isMobileMenuActive, setIsMobileMenuActive } = useApplicationManager();
  return (
    <>
      {/* JYSEIFY Logo ⬇️ */}
      <NavigationLogo />
      {/* Search bar ⬇️ */}
      {isSearchActivated && (
        <div className="min-w-[85%] h-12 flex">
          <div className="bg-black-search-bar min-w-[100px] w-full h-12 flex overflow-hidden rounded-lg">
            <div
              className="h-full w-16 flex justify-center items-center"
              onClick={() => setIsSearchActivated(false)}
            >
              <FontAwesomeIcon icon={faX} flip="horizontal" />
            </div>
            <input
              placeholder="Search songs"
              className="w-full h-full bg-transparent outline-none border-none placeholder:text-black-search-bar-placeholder"
            />
          </div>
        </div>
      )}

      {/* Profile Section ⬇️ */}
      {!isSearchActivated && (
        <div className=" min-w-[15%] h-12 flex justify-end items-center cursor-pointer">
          {/* Search Icon ⬇️ */}
          <div
            className="mr-6 text-xl text-gray-500"
            onClick={() => setIsSearchActivated(true)}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} flip="horizontal" />
          </div>
          {/* Menu Icon ⬇️ */}
          {isMobileMenuActive ? (
            <div
              className="mr-6 text-xl text-gray-500"
              onClick={() => setIsMobileMenuActive(false)}
            >
              <FontAwesomeIcon icon={faX} flip="horizontal" />
            </div>
          ) : (
            <div
              className="mr-6 text-xl text-gray-500"
              onClick={() => setIsMobileMenuActive(true)}
            >
              <FontAwesomeIcon icon={faBars} flip="horizontal" />
            </div>
          )}

          <NavigationAvatar />
        </div>
      )}
    </>
  );
};

export default NavigationBarMobile;
