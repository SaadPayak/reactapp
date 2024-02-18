import React from "react";
import { Link } from "react-router-dom";

const NavigationLogo = () => {
  return (
    <Link
      to="/"
      className="min-w-[48px] h-12 text-[#ffffff] font-bold text-3xl relative cursor-pointer"
    >
      <img
        src="https://firebasestorage.googleapis.com/v0/b/realtimedb-b9ceb.appspot.com/o/JYSEIFY-LOGO.png?alt=media&token=fc882e3a-3fed-4e52-87a8-fb110d6a30b8"
        alt="JYSEIFY"
        className="absolute w-full h-full top-0 left-0"
      />
    </Link>
  );
};

export default NavigationLogo;
