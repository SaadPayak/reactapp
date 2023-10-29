import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

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
      {!isSmallScreen ? (
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
          <div className="min-w-[70%] h-12">
            <div className="bg-black-search-bar min-w-[300px] w-[500px] h-12 flex overflow-hidden rounded-lg">
              <div className="h-full w-16 flex justify-center items-center">
                <FontAwesomeIcon icon={faMagnifyingGlass} flip="horizontal" />
              </div>
              <input
                placeholder="Search by artists, songs or albums"
                className="w-full h-full bg-transparent outline-none border-none placeholder:text-black-search-bar-placeholder"
              />
            </div>
          </div>
          {/* Profile Icon ⬇️ */}
          <div className=" min-w-[15%] h-12 flex justify-end items-center cursor-pointer">
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
        </>
      ) : (
        <>
          {/* JYSEIFY Logo ⬇️ */}
          <div className="min-w-[48px] h-12 text-[#ffffff] font-bold text-3xl relative cursor-pointer">
            <img
              src="assets/images/JYSEIFY-LOGO.png"
              alt="JYSEIFY"
              className="absolute w-full h-full top-0 left-0"
            />
          </div>

          {/* Profile Icon ⬇️ */}
          <div className=" min-w-[15%] h-12 flex justify-end items-center cursor-pointer">
            <div className="mr-6 text-3xl text-gray-500">
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
        </>
      )}
    </nav>
  );
};
export default TopNavigation;
