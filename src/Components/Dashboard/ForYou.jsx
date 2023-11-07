import React from "react";
import SongOption from "../Reusables/SongOption";
import { motion } from "framer-motion";

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
        <SongOption
          imageName="Chab.jpg"
          songName="Tera Yaar Hoon Main"
          songLength="4m 24s"
          uploadDate="07 Mar, 2023"
        />
        <SongOption
          imageName="Meeraaaaaaaa.png"
          songName="Pal Pal Dil Ke Paas"
          songLength="5m 28s"
          uploadDate="30 Nov, 1973"
        />
        <SongOption
          imageName="Meeraaaaaaa.png"
          songName="Love Story"
          songLength="3m 55s"
          uploadDate="15 Sept, 2008"
        />
        <SongOption
          imageName="huh.jpg"
          songName="Let Her Go"
          songLength="4m 12s"
          uploadDate="24 Jul, 2012"
        />
        <SongOption
          imageName="Chab.jpg"
          songName="Tera Yaar Hoon Main"
          songLength="4m 24s"
          uploadDate="07 Mar, 2023"
        />
        <SongOption
          imageName="Meeraaaaaaaa.png"
          songName="Pal Pal Dil Ke Paas"
          songLength="5m 28s"
          uploadDate="30 Nov, 1973"
        />
        <SongOption
          imageName="Meeraaaaaaa.png"
          songName="Love Story"
          songLength="3m 55s"
          uploadDate="15 Sept, 2008"
        />
        <SongOption
          imageName="huh.jpg"
          songName="Let Her Go"
          songLength="4m 12s"
          uploadDate="24 Jul, 2012"
        />
      </motion.div>
    </div>
  );
};

export default ForYou;
