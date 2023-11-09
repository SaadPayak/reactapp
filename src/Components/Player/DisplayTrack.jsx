import React from "react";
import Controls from "./Controls";
import { useApplicationManager } from "../../contexts/ApplicationContext";
import SongDescription from "../Reusables/SongDescription";

const DisplayTrack = ({
  currentSong,
  audioRef,
  setDuration,
  progressBarRef,
  duration,
  setTimeProgress,
  playNextSong,
  playPreviousSong,
}) => {
  const { activatePopupCenter } = useApplicationManager();
  const onLoadedMetadata = () => {
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    progressBarRef.current.max = seconds;
  };
  return (
    <div className=" py-3 flex justify-between items-center cursor-pointer">
      <div
        className="flex"
        onClick={() => {
          activatePopupCenter(<SongDescription />);
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
          <h1 className="text-sm text-gray-300">{currentSong?.title}</h1>
          <h1 className="text-xs text-gray-500">{currentSong?.author}</h1>
        </div>
        <audio
          src={currentSong?.src}
          ref={audioRef}
          onLoadedMetadata={onLoadedMetadata}
        />
      </div>
      <div>
        <Controls
          audioRef={audioRef}
          progressBarRef={progressBarRef}
          duration={duration}
          setTimeProgress={setTimeProgress}
          playNextSong={playNextSong}
          playPreviousSong={playPreviousSong}
        />
      </div>
    </div>
  );
};

export default DisplayTrack;
