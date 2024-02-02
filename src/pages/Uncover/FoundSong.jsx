import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock, faPlay } from "@fortawesome/free-solid-svg-icons";
import { usePlayer } from "../../contexts/PlayerContext";

const FoundSong = ({ foundSong }) => {
  const { playSingle } = usePlayer();
  return (
    <div className=" w-full min-h-full relative rounded-lg  flex flex-col justify-start items-start bg-black-main rounded-t-3xl">
      <div className="w-full h-auto  overflow-visible scrollbar-hidden pb-5">
        <div className="w-full flex justify-center items-center rounded-md overflow-hidden">
          <img
            src={foundSong.coverImage}
            alt={foundSong.title}
            className="w-[300px] h-[300px] object-cover rounded-md"
          />
        </div>
        <div className="w-full">
          <div className="w-full overflow-x-scroll scrollbar-hidden ">
            <div className="w-full min-h-full px-7 py-10 flex flex-col justify-start items-start">
              {/* Title and Artist */}
              <div className="w-full">
                <div className="flex justify-between items-center">
                  <h1 className="bg-gradient-to-r from-pink-primary to-purple-400 bg-clip-text text-transparent  text-6xl py-5">
                    {foundSong.title}
                  </h1>
                  <div
                    className="bg-pink-primary text-white  rounded-full w-14 h-14 flex justify-center items-center cursor-pointer"
                    onClick={() => {
                      playSingle(foundSong.songId);
                    }}
                  >
                    <FontAwesomeIcon icon={faPlay} />
                  </div>
                </div>
                <h1 className=" text-gray-400 text-base font-normal">
                  {foundSong.author}
                </h1>
              </div>
              {/* Meta Data */}
              <div className="mt-10">
                <div className="text-gray-500 flex items-center justify-start">
                  <FontAwesomeIcon icon={faClock} />
                  <h1 className="text-base  ml-4">{foundSong.duration}</h1>
                </div>
                <div className="mt-4 text-gray-500 flex items-center justify-start">
                  <FontAwesomeIcon icon={faCalendar} />
                  <h1 className="text-base  ml-4">{foundSong.releaseDate}</h1>
                </div>
                <div className="mt-4 text-gray-500 flex items-center justify-start">
                  <FontAwesomeIcon icon={faPlay} />
                  <h1 className="text-base  ml-4">{foundSong.plays}</h1>
                </div>
              </div>
              <div className="mt-5">
                <h1 className="text-gray-300  text-3xl mb-2 ">Lyrics</h1>
                <pre className="text-gray-400 font-noto text-sm ">
                  {foundSong.lyrics}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoundSong;
