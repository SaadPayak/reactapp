import React from "react";
import SongOption from "../Reusables/SongOption";
import { motion } from "framer-motion";
import { tracks } from "../../data/Songs/ForYou/data";
const ForYou = () => {
  return (
    <div className="mt-5 min-w-full pb-32">
      <div>
        <h1 className="font-light text-xl text-gray-500">
          Music for <span className="text-gray-400">YOU</span>
        </h1>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {tracks.map((track) => {
          return (
            <SongOption
              imagePath={track.coverImage}
              songName={track.title}
              songLength={track.duration}
              uploadDate={track.releaseDate}
              songId={track.songId}
              key={track.songId}
            />
          );
        })}
      </motion.div>
    </div>
  );
};

export default ForYou;
