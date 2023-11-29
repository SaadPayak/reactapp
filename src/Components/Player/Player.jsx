import React, { useEffect, useRef } from "react";
import { usePlayer } from "../../contexts/PlayerContext";
import "./styles.css";

import SongDetails from "./SongDetails";
import ProgressBar from "./ProgressBar";

const Player = ({ isSmallScreen }) => {
  const audioRef = useRef();
  const {
    isPlaying,
    setIsPlaying,
    songInfo,
    setSongInfo,
    currentSong,
    setCurrentSong,
    currentTrackIndex,
    setCurrentTrackIndex,
    songLibrary,
  } = usePlayer();

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

  const playPreviousSong = async () => {
    audioRef.current.pause();
    let newIndex = currentTrackIndex - 1;
    if (newIndex < 0) {
      newIndex = songLibrary.library.length - 1;
    }
    setCurrentTrackIndex(newIndex);
    await setCurrentSong(songLibrary.library[newIndex]);
    setSongInfo({
      currentTime: 0,
      duration: 0,
      animationPercentage: 0,
    });
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

  let playerTailwind =
    "h-24 fixed text-white bg-black-secondary right-0 bottom-0 px-6 z-[1000]";
  if (isSmallScreen) {
    playerTailwind += " w-[100%]";
  } else {
    playerTailwind += " w-[80%]";
  }
  return (
    <div className={playerTailwind}>
      <SongDetails
        {...{
          isSmallScreen,
          currentSong,
          isPlaying,
          audioRef,
          timeUpdateHandler,
          playNextSong,
          playPreviousSong,
          togglePlayPause,
        }}
      />
      <ProgressBar {...{ songInfo, dragHandler }} />
    </div>
  );
};

export default Player;
