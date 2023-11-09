import React, { createContext, useContext, useState } from "react";
import { forYou } from "../data/Songs/songs";
const PlayerContext = createContext();

export const usePlayer = () => {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error(
      "usePlayer Context must be used within a PlaylistsProvider"
    );
  }
  return context;
};

export const PlayerProvider = ({ children }) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [songLibrary, setSongLibrary] = useState({
    category: "FOR-YOU",
    library: forYou,
  });
  const [currentSong, setCurrentSong] = useState(forYou[currentTrackIndex]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const singleSongPlayButtonHandler = (library, index) => {
    if(library === songLibrary.category) {
      setCurrentTrackIndex(index);
      setCurrentSong(songLibrary.library[index])
      return
    }

    // handle other categories and setting of setSongLibrary
  }


  const value = {
    currentSong,
    setCurrentSong,
    currentTrackIndex,
    setCurrentTrackIndex,
    songLibrary,
    setSongLibrary,
    isPlaying,
    setIsPlaying,
    timeProgress,
    setTimeProgress,
    duration,
    setDuration,
    singleSongPlayButtonHandler,
  };
  return (
    <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>
  );
};
