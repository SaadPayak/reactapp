import React, { useEffect, useRef, useState } from "react";
import { usePlayer } from "../../contexts/PlayerContext";
import SongDescriptionMobile from "../Reusables/mobile/SongDescriptionMobile";
import SongDescription from "../Reusables/SongDescription";
import { useApplicationManager } from "../../contexts/ApplicationContext";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackward,
  faForward,
  faPause,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";

const Player2 = ({ isSmallScreen }) => {
  const audioRef = useRef();
  const {
    currentSong,
    isPlaying,
    setIsPlaying,
    setCurrentSong,
    currentTrackIndex,
    setCurrentTrackIndex,
    // timeProgress,
    // setTimeProgress,
    // duration,
    // setDuration,
    songLibrary,
  } = usePlayer();

  const { activatePopupCenter } = useApplicationManager();

  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, audioRef, currentSong]);

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const playNextSong = async () => {
    // Next song won't start playing automatically, so we manually play and pause it here
    audioRef.current.pause();
    const newIndex = (currentTrackIndex + 1) % songLibrary.library.length;
    setCurrentTrackIndex(newIndex);
    await setCurrentSong(songLibrary.library[newIndex]);
    setSongInfo({
      currentTime: 0,
      duration: 0,
      animationPercentage: 0,
    });
    // audioRef.current.play();
  };

  const playPreviousSong = () => {
    let newIndex = currentTrackIndex - 1;
    if (newIndex < 0) {
      newIndex = songLibrary.library.length - 1;
    }
    setCurrentTrackIndex(newIndex);
    setCurrentSong(songLibrary.library[newIndex]);
  };

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    const roundedContent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animation = Math.round((roundedContent / roundedDuration) * 100);
    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration,
      animationPercentage: animation,
    });
  };

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const trackAnim = {
    transform: `translateX(${songInfo.animationPercentage}%)`,
  };

  let playerTailwind =
    "h-24 fixed text-white bg-black-secondary right-0 bottom-0 px-6 z-[1000]";
  if (isSmallScreen) {
    playerTailwind += " w-[100%]";
  } else {
    playerTailwind += " w-[80%]";
  }
  return (
    <div className={playerTailwind}>
      {/* Song Details */}
      <div className=" py-3 flex justify-between items-center cursor-pointer">
        <div
          className="flex"
          onClick={() => {
            activatePopupCenter(
              isSmallScreen ? <SongDescriptionMobile /> : <SongDescription />
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
        </div>
      </div>
      {/* Progress Bar */}
      <div className="w-full h-5 flex items-center justify-between font-semibold text-sm text-[#7c7c7c]">
        <p>{getTime(songInfo.currentTime)}</p>
        <div className="w-[100%] mx-4 h-[6px] bg-[#fc3c44] rounded-full overflow-hidden relative">
          <input
            className="song-range"
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            onChange={dragHandler}
            type="range"
          />
          <div
            className="h-full w-full absolute top-0 left-0 pointer-events-none bg-[#ccc] transition-all duration-75 ease-in-out"
            style={trackAnim}
          />
        </div>
        <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
      </div>
    </div>
  );
};

export default Player2;
