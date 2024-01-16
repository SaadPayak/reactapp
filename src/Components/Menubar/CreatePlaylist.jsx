import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useApplicationManager } from "../../contexts/ApplicationContext";
import { usePlaylists } from "../../contexts/PlaylistsContext";

const CreatePlaylist = () => {
  const { activatePopupCenter } = useApplicationManager();
  return (
    <div
      onClick={() => activatePopupCenter(<PlaylistInfo />)}
      className="w-full h-10 mb-3 text-white text-sm overflow-hidden flex justify-center items-center cursor-pointer rounded-md  bg-pink-primary hover:bg-pink-secondary transition-all duration-200 ease-in-out"
    >
      <FontAwesomeIcon icon={faPlus} />
      <h1 className="ml-2 ">Create Playlist</h1>
    </div>
  );
};

const PlaylistInfo = () => {
  const [playlistName, setPlaylistName] = useState("");
  const [playlistColor, setplaylistColor] = useState("#f83b43");
  const { deactivatePopupCenter } = useApplicationManager();
  const { addToPlaylist } = usePlaylists();
  const playlistColors = [
    "#f83b43",
    "#3bc6f8",
    "#bff83b",
    "#52f83b",
    "#f8783b",
    "#493bf8",
    "#f0a3bc",
    "#7ec143",
  ];
  return (
    <div className="">
      <div className="w-96 px-10 py-20 rounded-lg  bg-black-secondary">
        <h1 className="ml-1 mb-5 text-gray-200 text-3xl font-semibold">
          New Playlist
        </h1>
        <input
          placeholder="Playlist name"
          value={playlistName}
          onChange={(e) => setPlaylistName(e.target.value)}
          className="w-full rounded-md text-sm mb-5 text-gray-200 bg-black-ultra-light outline-none border-none p-3"
        />
        <div className="mt-4  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-2 justify-items-center items-center">
          {playlistColors.map((color) => {
            let tailwindClass = `w-6 h-6 rounded-sm cursor-pointer mb-3`;
            if (color === playlistColor) {
              tailwindClass += " border-white border-[2px] ";
            }
            return (
              <div
                className={tailwindClass}
                style={{ background: color }}
                onClick={() => setplaylistColor(color)}
              ></div>
            );
          })}
        </div>
        <div
          className="w-full h-10 my-7 text-white text-sm overflow-hidden flex justify-center items-center cursor-pointer rounded-md  bg-pink-primary hover:bg-pink-secondary transition-all duration-200 ease-in-out"
          onClick={() => {
            if (!playlistName) {
              return;
            }
            addToPlaylist(playlistName, playlistColor);
            deactivatePopupCenter();
          }}
        >
          <h1 className="mr-2">Create</h1>
          <FontAwesomeIcon icon={faPlus} />
        </div>
        <div
          onClick={deactivatePopupCenter}
          className="w-full h-7 text-red-500 underline mt-2 text-sm overflow-hidden flex justify-center items-center cursor-pointer rounded-md transition-all duration-200 ease-in-out"
        >
          <h1>Cancle</h1>
        </div>
      </div>
    </div>
  );
};
export default CreatePlaylist;
