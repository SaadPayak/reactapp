import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { artists } from "../../data/Artists/artists";

const ArtistsPanel = () => {
  return (
    <div className="w-full my-4 relative">
      <div className="absolute top-0 left-0 w-3 h-full bg-gradient-to-r from-black-main panel z-50"></div>
      <div className="absolute top-0 right-0 w-3 h-full bg-gradient-to-l from-black-main panel z-50"></div>
      <h1 className="text-xl font-light text-gray-500 relative z-50">
        Artists of the Week
      </h1>
      <div className="flex items-center justify-start h-72 overflow-x-scroll scrollbar-hidden">
        {artists.map((artist) => (
          <Panel
            key={artist.artistName}
            imageName={artist.imageName}
            artistName={artist.artistName}
            navigationUrl={artist.navigationUrl}
            sequence={artist.sequence}
          />
        ))}
      </div>
    </div>
  );
};

const Panel = ({ imageName, artistName, navigationUrl, sequence }) => {
  const navigate = useNavigate();

  const panelVariants = {
    hidden: { opacity: 0, y: 20 * sequence },
    visible: { opacity: 1, y: 0 },
  };
  const itemTransition = {
    duration: 0.4,
    ease: "easeOut",
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={panelVariants}
      transition={itemTransition}
      className="min-w-[250px] h-[90%] group mr-5 rounded-lg overflow-hidden cursor-pointer relative shadow-black-secondary"
      onClick={() => navigate(`/artists/${navigationUrl}`)}
    >
      <img
        src={`assets/images/artists/${imageName}`}
        alt="artist"
        className="absolute top-0 left-0 w-[100%] h-[100%] object-cover group-hover:w-[110%] group-hover:h-[110%] transition-all duration-300 ease-in-out"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black z-50"></div>
      <h1 className="absolute left-5 bottom-5 z-50 text-3xl text-gray-300">
        {artistName}
      </h1>
    </motion.div>
  );
};

export default ArtistsPanel;
