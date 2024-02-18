import React from "react";

const Header = () => {
  return (
    <div className="w-full h-[30%] flex flex-col justify-center items-center">
      <div className="w-20 h-20 ">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/realtimedb-b9ceb.appspot.com/o/JYSEIFY-LOGO.png?alt=media&token=fc882e3a-3fed-4e52-87a8-fb110d6a30b8"
          alt="Jyseify"
        />
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
