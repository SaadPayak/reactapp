import React from "react";
import { Link } from "react-router-dom";

const NavigationAvatar = () => {
  return (
    <Link to={"account"}>
      <div className=" min-w-[15%] h-10 flex justify-end items-center cursor-pointer">
        <div className="h-full min-w-[40px] bg-green-500 flex justify-center items-center rounded-full p-[2px]">
          <div className="h-full w-full rounded-full relative bg-black-main overflow-hidden">
            <img
              src="/assets/images/top-navigation-bar/userprofile.png"
              alt="JYSEIFY"
              className="absolute w-full h-full top-0 left-0 object-cover"
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NavigationAvatar;
