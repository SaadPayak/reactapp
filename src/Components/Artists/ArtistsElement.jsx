import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";

const ArtistsElement = ({ imageName, artistName, navigationUrl }) => {
  const navigate = useNavigate();
  return (
    <div
      className="border-b-[1px] border-black-secondary rounded-md overflow-hidden p-4 mb-4 hover:bg-black-secondary cursor-pointer transition-all duration-300 ease-out"
      onClick={() => navigate(navigationUrl)}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start">
          <div className="w-20 h-20 relative rounded-full overflow-hidden">
            <img
              src={`/assets/images/artists/${imageName}`}
              alt={artistName}
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </div>
          <div className="ml-5 text-gray-400 text-2xl">
            <h1>{artistName}</h1>
          </div>
        </div>
        <div className="mr-5">
          <FontAwesomeIcon
            className="text-gray-500 text-xl"
            icon={faArrowRight}
          />
        </div>
      </div>
    </div>
  );
};

export default ArtistsElement;
