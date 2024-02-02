import { faHeartCrack } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const NotFound = ({ setNotFound }) => {
  return (
    <div className="min-h-[450px] flex justify-center items-center flex-col space-y-5">
      <FontAwesomeIcon
        className="text-[#6b6b6b] text-5xl"
        icon={faHeartCrack}
      />
      <div className="text-center">
        <h1 className="text-[#d8d8d8] text-lg">Song Not Found</h1>
        <p className="text-xs mt-2 text-[#444444]">
          Try again later or play the song longer for better accuracy
        </p>
      </div>
      <button
        onClick={() => setNotFound(false)}
        className="bg-pink-primary py-2 px-4 rounded-md text-white text-sm"
      >
        Try Another
      </button>
    </div>
  );
};

export default NotFound;
