import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";

const NavigationAvatar = () => {
  const { user } = useUser();
  return (
    <Link to={"account"}>
      <div className=" min-w-[15%] h-10 flex justify-end items-center cursor-pointer">
        <div className="h-full min-w-[40px]  flex justify-center items-center rounded-full p-[2px]">
          <div className="h-full w-full rounded-full relative bg-pink-primary overflow-hidden flex justify-center items-center">
            {user.name[0].toUpperCase()}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NavigationAvatar;
