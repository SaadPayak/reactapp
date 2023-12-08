import React from "react";
import { useApplicationManager } from "../../contexts/ApplicationContext";
import SongDescriptionMobile from "../Reusables/mobile/SongDescriptionMobile";
import SongDescription from "../Reusables/SongDescription";
import Controls from "./Controls";

const SongDetails = ({
  isSmallScreen,
  currentSong,
  isPlaying,
  audioRef,
  timeUpdateHandler,
  playNextSong,
  playPreviousSong,
  togglePlayPause,
}) => {
  const { activatePopupCenter } = useApplicationManager();
  return (
    <div className=" py-3 flex justify-between items-center cursor-pointer">
      <div
        className="flex"
        onClick={() => {
          activatePopupCenter(
            isSmallScreen ? (
              <SongDescriptionMobile song={currentSong} />
            ) : (
              <SongDescription song={currentSong} />
            )
          );
        }}
      >
        <div className="w-[43px] h-[43px]  rounded-md overflow-hidden relative">
          <img
            src={currentSong?.coverImage}
            alt="cover"
            className="absolute top-0 left-0 w-full object-cover"
          />
        </div>
        <div className=" bg-purple-00 px-4 flex flex-col justify-center items-start">
          <h1 className="text-sm text-gray-300 whitespace-nowrap text-ellipsis">
            {currentSong?.title}
          </h1>
          <h1 className="text-xs text-gray-500 whitespace-nowrap text-ellipsis">
            {currentSong?.author}
          </h1>
        </div>
      </div>
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong?.src}
        onEnded={playNextSong}
      />
      <div>
        {/* Controls */}
        <Controls
          {...{ isPlaying, playNextSong, playPreviousSong, togglePlayPause }}
        />
      </div>
    </div>
  );
};

export default SongDetails;
