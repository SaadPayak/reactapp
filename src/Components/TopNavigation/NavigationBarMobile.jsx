import {
  faCancel,
  faCross,
  faMagnifyingGlass,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const NavigationBarMobile = () => {
  const [isSearchActivated, setIsSearchActivated] = useState(false);
  return (
    <>
      {/* JYSEIFY Logo ⬇️ */}
      <div className="min-w-[48px] h-12 text-[#ffffff] font-bold text-3xl relative cursor-pointer">
        <img
          src="assets/images/JYSEIFY-LOGO.png"
          alt="JYSEIFY"
          className="absolute w-full h-full top-0 left-0"
        />
      </div>
      {/* Search bar ⬇️ */}
      {isSearchActivated && (
        <div className="min-w-[85%] h-12 bg-red-00 flex">
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

      {/* Profile Icon ⬇️ */}
      {!isSearchActivated && (
        <div className=" min-w-[15%] h-12 flex justify-end items-center cursor-pointer">
          <div
            className="mr-6 text-3xl text-gray-500"
            onClick={() => setIsSearchActivated(true)}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} flip="horizontal" />
          </div>

          <div className="h-full min-w-[48px] bg-green-500 flex justify-center items-center rounded-full p-[3px]">
            <div className="h-full w-full rounded-full relative overflow-hidden">
              <img
                src="assets/images/top-navigation-bar/userprofile.png"
                alt="JYSEIFY"
                className="absolute w-full h-full top-0 left-0 object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavigationBarMobile;
