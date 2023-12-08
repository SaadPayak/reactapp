import React from "react";
import { usePlayer } from "../../../contexts/PlayerContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faClock,
  faPlay,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { useApplicationManager } from "../../../contexts/ApplicationContext";

const SongDescriptionMobile = () => {
  const { currentSong } = usePlayer();
  const { deactivatePopupCenter } = useApplicationManager();
  return (
    // <div className="w-[800px] h-[450px] rounded-lg overflow-hidden flex justify-center items-center bg-black-secondary">
    //   <div className="w-1/2 h-full  relative">
    //     <img
    //       src={currentSong.coverImage}
    //       alt={currentSong.title}
    //       className="absolute w-full h-full top-0 left-0 object-fit"
    //     />
    //   </div>
    // <div className="w-1/2 h-full bg relative overflow-y-scroll scrollbar-hidden">
    //   <div
    //     className="absolute top-5 right-7 text-base font-bold cursor-pointer text-white-text-main"
    //     onClick={deactivatePopupCenter}
    //   >
    //     <FontAwesomeIcon icon={faX} />
    //   </div>
    //   <div className="w-full min-h-full px-7 py-16 flex flex-col justify-start items-start">
    //     {/* Title and Artist */}
    //     <div>
    //       <h1 className="text-white-text-main text-4xl">
    //         {currentSong.title}
    //       </h1>
    //       <h1 className=" mt-3 text-gray-400 text-sm font-normal">
    //         {currentSong.author}
    //       </h1>
    //     </div>
    //     {/* Meta Data */}
    //     <div className="mt-10">
    //       <div className="text-gray-500 flex items-center justify-start">
    //         <FontAwesomeIcon icon={faClock} />
    //         <h1 className="text-sm  ml-4">{currentSong.duration}</h1>
    //       </div>
    //       <div className="mt-4 text-gray-500 flex items-center justify-start">
    //         <FontAwesomeIcon icon={faCalendar} />
    //         <h1 className="text-sm  ml-4">{currentSong.releaseDate}</h1>
    //       </div>
    //       <div className="mt-4 text-gray-500 flex items-center justify-start">
    //         <FontAwesomeIcon icon={faPlay} />
    //         <h1 className="text-sm  ml-4">{currentSong.plays}</h1>
    //       </div>
    //     </div>
    //     <div className="mt-5">
    //       <h1 className="text-gray-300 text-3xl mb-2">Lyrics</h1>
    //       <pre className="text-gray-400 font-noto text-sm">
    //         {currentSong.lyrics}
    //       </pre>
    //     </div>
    //   </div>
    //   </div>
    // </div>
    <div className=" w-[450px] min-h-[450px] rounded-lg overflow-hidden flex flex-col justify-start items-start bg-black-secondary">
      <div className="w-full h-[450px]  overflow-y-scroll scrollbar-hidden py-5">
        <div className="w-full  flex justify-center items-center rounded-md overflow-hidden">
          <img
            src={currentSong.coverImage}
            alt={currentSong.title}
            className="w-[300px] h-[300px] object-cover rounded-md"
          />
        </div>
        <div className="w-full h-[600px] relative ">
          <div className="w-full  h-full ">
            <div
              className="absolute top-16 right-7 text-base font-bold cursor-pointer text-white-text-main"
              onClick={deactivatePopupCenter}
            >
              <FontAwesomeIcon icon={faX} />
            </div>
            <div className="w-full min-h-full px-7 py-16 flex flex-col justify-start items-start">
              {/* Title and Artist */}
              <div>
                <h1 className="bg-gradient-to-r from-pink-primary to-purple-400 bg-clip-text text-transparent text-4xl">
                  {currentSong.title}
                </h1>
                <h1 className=" mt-3 text-gray-400 text-sm font-normal">
                  {currentSong.author}
                </h1>
              </div>
              {/* Meta Data */}
              <div className="mt-10">
                <div className="text-gray-500 flex items-center justify-start">
                  <FontAwesomeIcon icon={faClock} />
                  <h1 className="text-sm  ml-4">{currentSong.duration}</h1>
                </div>
                <div className="mt-4 text-gray-500 flex items-center justify-start">
                  <FontAwesomeIcon icon={faCalendar} />
                  <h1 className="text-sm  ml-4">{currentSong.releaseDate}</h1>
                </div>
                <div className="mt-4 text-gray-500 flex items-center justify-start">
                  <FontAwesomeIcon icon={faPlay} />
                  <h1 className="text-sm  ml-4">{currentSong.plays}</h1>
                </div>
              </div>
              <div className="mt-5">
                <h1 className="text-gray-300  text-3xl mb-2 ">Lyrics</h1>
                <pre className="text-gray-400 font-noto text-sm ">
                  {currentSong.lyrics}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongDescriptionMobile;
