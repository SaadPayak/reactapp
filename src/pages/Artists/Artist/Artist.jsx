import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { artists } from "../../../data/Artists/artists";
import ArtistBanner from "../../../Components/Artists/Artist/ArtistBanner";
import SongOption from "../../../Components/Reusables/SongOption";
import { useApplicationManager } from "../../../contexts/ApplicationContext";
import { allSongs } from "../../../data/Songs/songs";

const Artist = () => {
  const { id } = useParams();
  const { setSelectedMenubarItemId } = useApplicationManager();

  useEffect(() => {
    // 4 represents id of artists in menubar, this changes the currently selected item on the menubar if user indirectly visits the artists section (eg: from artsits panel in home page)
    setSelectedMenubarItemId(4);
  }, [setSelectedMenubarItemId]);

  const artist = artists.find((artist) => artist.navigationUrl === id);
  const songs = allSongs.categories["ARTISTS"][artist.id].map((id) => {
    return allSongs.all.find((song) => song.songId === id);
  });

  return (
    <div className="">
      <div className="w-full min-h-screen ">
        {/* Artist Banner */}
        <ArtistBanner artist={artist} />
        <div className="mt-5 min-w-full ">
          <div>
            <h1 className="font-light text-xl text-gray-500">
              Music by{" "}
              <span className="text-gray-400">{artist.artistName}</span>
            </h1>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {songs.map((track, index) => {
              return (
                <SongOption
                  imagePath={track.coverImage}
                  songName={track.title}
                  songLength={track.duration}
                  uploadDate={track.releaseDate}
                  songId={track.songId}
                  index={index}
                  libraryName={`ARTISTS->${artist.id}`}
                  key={track.songId}
                />
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Artist;
