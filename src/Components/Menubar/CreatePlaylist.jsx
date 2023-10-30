import { faPlus, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { usePlaylists } from "../../contexts/PlaylistsContext";

const CreatePlaylist = () => {
  const { isCreatePlaylist, setIsCreatePlaylist } = usePlaylists();
  return (
    <>
      {!isCreatePlaylist ? (
        <div
          onClick={() => setIsCreatePlaylist(true)}
          className="w-full h-10 mb-3 text-white text-sm overflow-hidden flex justify-center items-center cursor-pointer rounded-md  bg-pink-primary hover:bg-pink-secondary transition-all duration-200 ease-in-out"
        >
          <FontAwesomeIcon icon={faPlus} />
          <h1 className="ml-2 ">Create Playlist</h1>
        </div>
      ) : (
        <PlaylistInfo setIsCreatePlaylist={setIsCreatePlaylist} />
      )}
    </>
  );
};

const PlaylistInfo = ({ setIsCreatePlaylist }) => {
  return (
    <div className="w-full ">
      <input
        placeholder="Playlist name"
        className="w-full rounded-md text-sm text-gray-200 bg-black-ultra-light outline-none border-none p-3"
      />
      <div className="w-full flex mt-4 px-4 justify-evenly flex-wrap">
        <div className="w-6 h-6 rounded-sm cursor-pointer border-white border-[2px] bg-red-400"></div>
        <div className="w-6 h-6 rounded-sm cursor-pointer bg-purple-400"></div>
        <div className="w-6 h-6 rounded-sm cursor-pointer bg-green-400"></div>
        <div className="w-6 h-6 rounded-sm cursor-pointer bg-yellow-400"></div>
        <div className="w-6 h-6 rounded-sm cursor-pointer bg-blue-400"></div>
      </div>
      <div className="w-full h-10 mt-3 text-white text-sm overflow-hidden flex justify-center items-center cursor-pointer rounded-md  bg-pink-primary hover:bg-pink-secondary transition-all duration-200 ease-in-out">
        <h1 className="mr-2">Create</h1>
        <FontAwesomeIcon icon={faRightLong} />
      </div>
      <div
        onClick={() => setIsCreatePlaylist(false)}
        className="w-full h-7 text-red-500 mb-3 text-sm overflow-hidden flex justify-center items-center cursor-pointer rounded-md transition-all duration-200 ease-in-out"
      >
        <h1>Cancle</h1>
      </div>
    </div>
  );
};
export default CreatePlaylist;
