import React, { createContext, useContext, useState } from "react";

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
  const [playlists, setPlaylists] = useState([]);
  const [isCreatePlaylist, setIsCreatePlaylist] = useState(false);

  const value = {
    playlists,
    setPlaylists,
    isCreatePlaylist,
    setIsCreatePlaylist,
  };
  return (
    <PlaylistsContext.Provider value={value}>
      {children}
    </PlaylistsContext.Provider>
  );
};
