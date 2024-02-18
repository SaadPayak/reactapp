import React, { createContext, useContext, useState } from "react";
import { allSongs } from "../data/Songs/songs";
import { useUser } from "./UserContext";
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
  const { likedSongs, history } = useUser();
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });
  const [songLibrary, setSongLibrary] = useState({
    category: "FOR-YOU",
    library: allSongs.categories["FOR-YOU"].map((id) => {
      return allSongs.all.find((song) => song.songId === id);
    }),
  });
  const [currentSong, setCurrentSong] = useState(
    allSongs.categories["FOR-YOU"].map((id) => {
      return allSongs.all.find((song) => song.songId === id);
    })[currentTrackIndex]
  );
  const [isPlaying, setIsPlaying] = useState(false);

  const playSingle = (id) => {
    setSongLibrary({
      category: "SINGLE",
      library: allSongs.all.find((song) => song.songId === id),
    });
    setCurrentTrackIndex(0);
    setCurrentSong(allSongs.all.find((song) => song.songId === id));
    setIsPlaying(true);
  };

  const singleSongPlayButtonHandler = (library, index) => {
    if (library === songLibrary.category) {
      setCurrentTrackIndex(index);
      setCurrentSong(songLibrary.library[index]);
      return;
    }

    // handle other categories and setting of setSongLibrary
    if (library.startsWith("ARTISTS->")) {
      setSongLibrary({
        category: library,
        library: allSongs.categories["ARTISTS"][
          `${library.split("->")[1]}`
        ].map((id) => {
          return allSongs.all.find((song) => song.songId === id);
        }),
      });
      setCurrentTrackIndex(index);
      setCurrentSong(
        allSongs.categories["ARTISTS"][`${library.split("->")[1]}`].map(
          (id) => {
            return allSongs.all.find((song) => song.songId === id);
          }
        )[index]
      );
    }

    if (library === "FOR-YOU") {
      setSongLibrary({
        category: library,
        library: allSongs.categories["FOR-YOU"].map((id) => {
          return allSongs.all.find((song) => song.songId === id);
        }),
      });
      setCurrentTrackIndex(index);
      setCurrentSong(
        allSongs.categories["FOR-YOU"].map((id) => {
          return allSongs.all.find((song) => song.songId === id);
        })[index]
      );
    }

    if (library === "LIKED") {
      setSongLibrary({
        category: library,
        library: likedSongs.map((id) => {
          return allSongs.all.find((song) => song.songId === id);
        }),
      });
      setCurrentTrackIndex(index);
      setCurrentSong(
        likedSongs.map((id) => {
          return allSongs.all.find((song) => song.songId === id);
        })[index]
      );
    }

    if (library === "HISTORY") {
      setSongLibrary({
        category: library,
        library: history.map((id) => {
          return allSongs.all.find((song) => song.songId === id);
        }),
      });
      setCurrentTrackIndex(index);
      setCurrentSong(
        history.map((id) => {
          return allSongs.all.find((song) => song.songId === id);
        })[index]
      );
    }
  };

  const value = {
    currentSong,
    setCurrentSong,
    currentTrackIndex,
    setCurrentTrackIndex,
    songInfo,
    setSongInfo,
    songLibrary,
    setSongLibrary,
    isPlaying,
    setIsPlaying,
    singleSongPlayButtonHandler,
    playSingle,
  };
  return (
    <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>
  );
};
