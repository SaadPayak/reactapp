import React, { useRef } from "react";
import DisplayTrack from "./DisplayTrack";
import ProgressBar from "./ProgressBar";
import "./styles.css";
import { usePlayer } from "../../contexts/PlayerContext";

const Player = ({ isSmallScreen }) => {
  const audioRef = useRef();
  const progressBarRef = useRef();
  const {
    currentSong,
    setCurrentSong,
    currentTrackIndex,
    setCurrentTrackIndex,
    timeProgress,
    setTimeProgress,
    duration,
    setDuration,
    songLibrary,
  } = usePlayer();

  const playNextSong = () => {
    const newIndex = (currentTrackIndex + 1) % songLibrary.library.length;
    setCurrentTrackIndex(newIndex);
    setCurrentSong(songLibrary.library[newIndex]);
  };

  const playPreviousSong = () => {
    let newIndex = currentTrackIndex - 1;
    if (newIndex < 0) {
      newIndex = songLibrary.library.length - 1;
    }
    setCurrentTrackIndex(newIndex);
    setCurrentSong(songLibrary.library[newIndex]);
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
      <DisplayTrack
        currentSong={currentSong}
        audioRef={audioRef}
        setDuration={setDuration}
        progressBarRef={progressBarRef}
        duration={duration}
        setTimeProgress={setTimeProgress}
        playNextSong={playNextSong}
        playPreviousSong={playPreviousSong}
      />
      <ProgressBar
        progressBarRef={progressBarRef}
        audioRef={audioRef}
        timeProgress={timeProgress}
        duration={duration}
      />
    </div>
  );
};

export default Player;
