import React, { createContext, useContext, useState } from "react";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
const PlaylistsContext = createContext();

export const usePlaylists = () => {
  const context = useContext(PlaylistsContext);
  if (!context) {
    throw new Error(
      "usePlaylistsContext must be used within a PlaylistsProvider"
    );
  }
  return context;
};

export const PlaylistsProvider = ({ children }) => {
  const [playlists, setPlaylists] = useState([
    {
      icon: faSquare,
      iconColor: "text-purple-400",
      title: "Bolywood Hindi",
      id: 8,
    },
    { icon: faSquare, iconColor: "text-green-400", title: "Rap", id: 9 },
    { icon: faSquare, iconColor: "text-blue-400", title: "Meera♥️", id: 10 },
    { icon: faSquare, iconColor: "text-yellow-400", title: "Sad", id: 11 },
  ]);

  const addToPlaylist = (title, iconColor) => {
    const newPlaylist = {
      icon: faSquare,
      id: playlists[playlists.length - 1]["id"] + 1, // Generating an id which is 1 more than the last element (having the current largest id)
      iconColor: `text-${iconColor}`,
      title,
    };
    console.log([...playlists, newPlaylist]);
    setPlaylists([...playlists, newPlaylist]);
  };
  const value = {
    playlists,
    setPlaylists,

    addToPlaylist,
  };
  return (
    <PlaylistsContext.Provider value={value}>
      {children}
    </PlaylistsContext.Provider>
  );
};
