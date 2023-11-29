import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackward,
  faForward,
  faPause,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";

const Controls = ({
  isPlaying,
  playNextSong,
  playPreviousSong,
  togglePlayPause,
}) => {
  return (
    <div>
      <div className=" flex justify-center items-center text-xl ">
        <div
          className=" cursor-pointer flex justify-center items-center w-10 mx-2 text-[#7c7c7c]"
          onClick={playPreviousSong}
        >
          <FontAwesomeIcon icon={faBackward} />
        </div>
        {isPlaying ? (
          <div
            className="cursor-pointer flex justify-center items-center w-10 mx-2"
            onClick={togglePlayPause}
          >
            <FontAwesomeIcon icon={faPause} />
          </div>
        ) : (
          <div
            className="cursor-pointer flex justify-center items-center w-10 mx-2"
            onClick={togglePlayPause}
          >
            <FontAwesomeIcon icon={faPlay} />
          </div>
        )}
        <div
          className="cursor-pointer flex justify-center items-center w-10 mx-2 text-[#7c7c7c]"
          onClick={playNextSong}
        >
          <FontAwesomeIcon icon={faForward} />
        </div>
      </div>
    </div>
  );
};
export default Controls;
