import {
  faChartSimple,
  faFire,
  faRankingStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const ArtistBanner = ({ artist }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
        className="w-full rounded-md overflow-hidden  relative flex flex-col lg:flex-row"
      >
        {/* Artist Image */}
        <div className="h-72 w-full lg:w-[30%] lg:h-[350px] rounded-lg overflow-hidden relative">
          <img
            src={`/assets/images/artists/${artist.imageName}`}
            alt={artist.artistName}
            className="absolute top-0 left-0 w-[100%] h-[100%] object-cover"
          />
        </div>
        {/* Artist Details */}
        <div className=" w-full lg:h-full lg:w-[70%] ">
          {/* Artist Name */}
          <h1 className="m-3 text-5xl lg:text-7xl bg-gradient-to-r from-pink-primary to-purple-400 bg-clip-text text-transparent">
            {artist.artistName}
          </h1>
          {/* Artist Analytics */}
          <div className="text-gray-400 text-lg w-full grid grid-cols-1 lg:grid-cols-2 gap-5 p-5 mt-5">
            <div className="min-w-[100px] max-w-[400px] bg-black-secondary py-3 px-5 rounded-md overflow-hidden flex justify-between items-center">
              <div>
                <FontAwesomeIcon icon={faUser} className="w-8" />
                <span className="ml-3">Followers</span>
              </div>
              <div>
                <span className="font-semibold text-pink-secondary">3.97M</span>
              </div>
            </div>
            <div className="min-w-[100px] max-w-[400px] bg-black-secondary py-3 px-5 rounded-md overflow-hidden flex justify-between items-center">
              <div>
                <FontAwesomeIcon icon={faFire} className="w-8" />
                <span className="ml-3">Popularity</span>
              </div>
              <div>
                <span className="font-semibold text-pink-secondary">81%</span>
              </div>
            </div>
            <div className="min-w-[100px] max-w-[400px] bg-black-secondary py-3 px-5 rounded-md overflow-hidden flex justify-between items-center">
              <div>
                <FontAwesomeIcon icon={faRankingStar} className="w-8" />
                <span className="ml-3">Artist Rank</span>
              </div>
              <div>
                <span className="font-semibold text-pink-secondary">#45</span>
              </div>
            </div>
            <div className="min-w-[100px] max-w-[400px] bg-black-secondary py-3 px-5 rounded-md overflow-hidden flex justify-between items-center">
              <div>
                <FontAwesomeIcon icon={faChartSimple} className="w-8" />
                <span className="ml-3">Charts</span>
              </div>
              <div>
                <span className="font-semibold text-pink-secondary">316</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ArtistBanner;
