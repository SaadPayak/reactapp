import React from "react";

const Header = () => {
  return (
    <div className="w-full h-[30%] flex flex-col justify-center items-center">
      <div className="w-20 h-20 ">
        <img src="/assets/jyseify/JYSEIFY-LOGO.png" alt="Jyseify" />
      </div>
      <div>
        <h1 className="text-[#676767] font-medium text-sm ">
          One Place For All Your Songs
        </h1>
      </div>
    </div>
  );
};

export default Header;
