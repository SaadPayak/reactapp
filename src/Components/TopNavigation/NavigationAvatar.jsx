import React from "react";

const NavigationAvatar = () => {
  return (
    <div className=" min-w-[15%] h-10 flex justify-end items-center cursor-pointer">
      <div className="h-full min-w-[40px] bg-green-500 flex justify-center items-center rounded-full p-[2px]">
        <div className="h-full w-full rounded-full relative overflow-hidden">
          <img
            src="/assets/images/top-navigation-bar/userprofile.png"
            alt="JYSEIFY"
            className="absolute w-full h-full top-0 left-0 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default NavigationAvatar;
