import React, { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";
import { allSongs } from "../data/Songs/songs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export const UserProvider = ({ children }) => {
  const [likedSongs, setLikedSongs] = useState([
    "736c1fc47a7946d1b6516fde8efee85c",
    "4419cb670cf143ca9428b26791231e29",
    "f764751c0ecd452ca09b45aa71369654",
  ]);

  function addToLikedSongs(id) {
    const addedSong = allSongs.all.find((song) => song.songId === id);
    toast.custom((t) => <CustomToast t={t} addedSong={addedSong} />, {
      id: id,
      duration: 3000,
    });
    setLikedSongs([...likedSongs, id]);
  }

  function removeFromLikedSongs(id) {
    setLikedSongs(likedSongs.filter((songId) => songId !== id));
  }
  const value = {
    likedSongs,
    setLikedSongs,
    addToLikedSongs,
    removeFromLikedSongs,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

const CustomToast = ({ t, addedSong }) => {
  return (
    <div
      className={`${
        t.visible ? "animate-enter" : "animate-leave"
      } max-w-md w-full bg-black-secondary shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
    >
      <div className="flex-1 w-0 p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0 pt-0.5">
            <img
              className="h-11 w-11 rounded-md"
              src={addedSong.coverImage}
              alt=""
            />
          </div>
          <div className="ml-3 flex-1">
            <p className="text-sm font-medium text-gray-300">
              {addedSong.title}
            </p>
            <p className="text-xs text-gray-600 mt-1">
              Added to your liked songs ✅
            </p>
          </div>
        </div>
      </div>
      <div className=" flex justify-center items-center text-gray-500 p-5">
        <FontAwesomeIcon
          className="cursor-pointer"
          icon={faX}
          onClick={() => toast.dismiss(t.id)}
        />
      </div>
    </div>
  );
};
