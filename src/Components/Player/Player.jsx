import React, { useEffect, useRef, useState } from "react";
import DisplayTrack from "./DisplayTrack";
import ProgressBar from "./ProgressBar";
import { tracks } from "../../data/Songs/ForYou/data.js";
import "./styles.css";
import { usePlayer } from "../../contexts/PlayerContext";

const Player = ({ isSmallScreen }) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const audioRef = useRef();
  const progressBarRef = useRef();
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const { currentSong, setCurrentSong } = usePlayer();

  useEffect(() => {
    setCurrentSong(tracks[currentTrackIndex]);
  }, [currentTrackIndex, setCurrentSong]);

  const playNextSong = () => {
    const newIndex = (currentTrackIndex + 1) % tracks.length;
    setCurrentTrackIndex(newIndex);
    setCurrentSong(tracks[newIndex]);
    setDuration(0);
    setTimeProgress(0);
  };

  const playPreviousSong = () => {
    let newIndex = currentTrackIndex - 1;
    if (newIndex < 0) {
      newIndex = tracks.length - 1;
    }
    setCurrentTrackIndex(newIndex);
    setCurrentSong(tracks[newIndex]);
    setDuration(0);
    setTimeProgress(0);
  };

  let playerTailwind =
    "h-24 fixed text-white bg-black-secondary right-0 bottom-0 px-6 rounded-md";
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
