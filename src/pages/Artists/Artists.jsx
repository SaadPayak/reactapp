import React from "react";
import { artists } from "../../data/Artists/artists";
import ArtistsElement from "../../Components/Artists/ArtistsElement";
import { AnimatePresence, motion } from "framer-motion";

const Artists = () => {
  return (
    <div className="">
      <div className="w-full min-h-screen ">
        <h1 className="text-4xl font-light text-white-text-main">Artists</h1>
        <div className="mt-5">
          <AnimatePresence mode="wait">
            {artists.map((artist) => (
              <motion.div
                key={artist.navigationUrl}
                initial={{ opacity: 0, y: 20 * artist.sequence }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
              >
                <ArtistsElement
                  imageName={artist.imageName}
                  artistName={artist.artistName}
                  navigationUrl={artist.navigationUrl}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Artists;
