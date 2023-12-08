import React from "react";
import { useApplicationManager } from "../../contexts/ApplicationContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeartCircleMinus,
  faHeartCirclePlus,
  faPause,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { usePlayer } from "../../contexts/PlayerContext";
import { useUser } from "../../contexts/UserContext";
import SongDescriptionMobile from "./mobile/SongDescriptionMobile";
import SongDescription from "./SongDescription";

const SongOption = ({
  song,
  imagePath,
  songName,
  songLength,
  uploadDate,
  libraryName,
  index,
  songId,
}) => {
  const { isSmallScreen, activatePopupCenter } = useApplicationManager();
  return (
    <div
      className=" min-w-[200px] mt-4 overflow-hidden border-b-[1px] border-black-secondary hover:bg-black-secondary hover:rounded-md  cursor-pointer transition-all duration-150 ease-in-out"
      onClick={() => {
        activatePopupCenter(
          isSmallScreen ? (
            <SongDescriptionMobile song={song} />
          ) : (
            <SongDescription song={song} />
          )
        );
      }}
    >
      <div className="min-w-full  p-2 flex items-center">
        <SongImage imagePath={imagePath} />
        <SongName songName={songName} songLength={songLength} />
        <SongUploadDate uploadDate={uploadDate} />
        <SongActions
          songId={songId}
          isSmallScreen={isSmallScreen}
          index={index}
          libraryName={libraryName}
        />
      </div>
    </div>
  );
};

const SongImage = ({ imagePath }) => {
  return (
    <div className="min-w-[56px] h-14 mr-4 bg-black-secondary rounded-md overflow-hidden relative">
      <img
        src={imagePath}
        alt="cover"
        className="absolute top-0 left-0 w-full"
      />
    </div>
  );
};

const SongName = ({ songName, songLength }) => {
  return (
    <div className="min-w-[40%] lg:min-w-[50%] h-14 mr-2 flex flex-col justify-center rounded-md">
      <h1 className="text-normal font-light text-gray-300 mb-1">{songName}</h1>
      <h1 className="text-xs font-normal text-gray-500">{songLength}</h1>
    </div>
  );
};

const SongUploadDate = ({ uploadDate }) => {
  return (
    <div className="hidden sm:flex sm:min-w-[20%] lg:min-w-[15%] h-14 mr-2 items-center rounded-md">
      <h1 className="text-normal font-light text-gray-300">{uploadDate}</h1>
    </div>
  );
};

const SongActions = ({ isSmallScreen, songId, index, libraryName }) => {
  const { currentSong, isPlaying, setIsPlaying, singleSongPlayButtonHandler } =
    usePlayer();
  const { likedSongs, addToLikedSongs, removeFromLikedSongs } = useUser();
  if (isSmallScreen) {
    return (
      <div className="min-w-[40%] justify-end  h-14 mr-2 sm:min-w-[20%] flex items-center sm:justify-evenly rounded-md">
        {currentSong?.songId === songId ? (
          isPlaying ? (
            <div
              className="text-gray-300 hover:bg-black-ultra-light p-2 px-4 rounded-md transition-all duration-150 ease-in-out"
              onClick={(e) => {
                e.stopPropagation();
                setIsPlaying(false);
              }}
            >
              <FontAwesomeIcon icon={faPause} />
            </div>
          ) : (
            <div
              className="text-gray-300 hover:bg-black-ultra-light p-2 px-4 rounded-md transition-all duration-150 ease-in-out"
              onClick={(e) => {
                e.stopPropagation();
                setIsPlaying(true);
              }}
            >
              <FontAwesomeIcon icon={faPlay} />
            </div>
          )
        ) : (
          <div
            className="text-gray-300 hover:bg-black-ultra-light p-2 px-4 rounded-md transition-all duration-150 ease-in-out"
            onClick={(e) => {
              e.stopPropagation();
              setIsPlaying(true);
              singleSongPlayButtonHandler(libraryName, index);
            }}
          >
            <FontAwesomeIcon icon={faPlay} />
          </div>
        )}
        {likedSongs.some((id) => id === songId) ? (
          <div
            className="text-red-500 hover:bg-black-ultra-light p-2 px-4 rounded-md transition-all duration-150 ease-in-out"
            onClick={(e) => {
              e.stopPropagation();
              removeFromLikedSongs(songId);
            }}
          >
            <FontAwesomeIcon icon={faHeartCircleMinus} />
          </div>
        ) : (
          <div
            className="text-gray-300 hover:bg-black-ultra-light p-2 px-4 rounded-md transition-all duration-150 ease-in-out"
            onClick={(e) => {
              e.stopPropagation();
              addToLikedSongs(songId);
            }}
          >
            <FontAwesomeIcon icon={faHeartCirclePlus} />
          </div>
        )}
      </div>
    );
  }
  return (
    <div className="min-w-[25%] h-14 mr-2 flex items-center justify-evenly rounded-md ">
      {currentSong?.songId === songId ? (
        isPlaying ? (
          <div
            className="text-gray-300 hover:bg-black-ultra-light p-2 px-4 rounded-md transition-all duration-150 ease-in-out"
            onClick={(e) => {
              e.stopPropagation();
              setIsPlaying(false);
            }}
          >
            <FontAwesomeIcon icon={faPause} />
          </div>
        ) : (
          <div
            className="text-gray-300 hover:bg-black-ultra-light p-2 px-4 rounded-md transition-all duration-150 ease-in-out"
            onClick={(e) => {
              e.stopPropagation();
              setIsPlaying(true);
            }}
          >
            <FontAwesomeIcon icon={faPlay} />
          </div>
        )
      ) : (
        <div
          className="text-gray-300 hover:bg-black-ultra-light p-2 px-4 rounded-md transition-all duration-150 ease-in-out"
          onClick={(e) => {
            e.stopPropagation();
            setIsPlaying(true);
            singleSongPlayButtonHandler(libraryName, index);
          }}
        >
          <FontAwesomeIcon icon={faPlay} />
        </div>
      )}
      {likedSongs.some((id) => id === songId) ? (
        <div
          className="text-red-500 hover:bg-black-ultra-light p-2 px-4 rounded-md transition-all duration-150 ease-in-out"
          onClick={(e) => {
            e.stopPropagation();
            removeFromLikedSongs(songId);
          }}
        >
          <FontAwesomeIcon icon={faHeartCircleMinus} />
        </div>
      ) : (
        <div
          className="text-gray-300 hover:bg-black-ultra-light p-2 px-4 rounded-md transition-all duration-150 ease-in-out"
          onClick={(e) => {
            e.stopPropagation();
            addToLikedSongs(songId);
          }}
        >
          <FontAwesomeIcon icon={faHeartCirclePlus} />
        </div>
      )}
    </div>
  );
};
export default SongOption;
