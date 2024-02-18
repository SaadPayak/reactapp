import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useUser } from "../../contexts/UserContext";
import { allSongs } from "../../data/Songs/songs";
import SongOption from "../../Components/Reusables/SongOption";
import { useApplicationManager } from "../../contexts/ApplicationContext";
import { formatToDDMonYYYY } from "../../utils/functions/formatToDDMonYYYY";

const SongHistory = () => {
  const { history, historyDates } = useUser();
  const { setSelectedMenubarItemId } = useApplicationManager();
  useEffect(() => {
    // 4 represents id of artists in menubar, this changes the currently selected item on the menubar if user indirectly visits the artists section (eg: from artsits panel in home page)
    setSelectedMenubarItemId(7);
  }, [setSelectedMenubarItemId]);

  const hist = history.map((id) => {
    return allSongs.all.find((song) => song.songId === id);
  });
  return (
    <div className="w-full min-h-screen ">
      <h1 className="text-4xl font-semibold text-pink-primary">History</h1>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {hist.map((track, index) => {
          return (
            <>
              <SongOption
                song={track}
                imagePath={track.coverImage}
                songName={track.title}
                songLength={track.duration}
                uploadDate={formatToDDMonYYYY(new Date(historyDates[index]))}
                songId={track.songId}
                index={index}
                libraryName="HISTORY"
                key={track.songId}
              />
            </>
          );
        })}
      </motion.div>
    </div>
  );
};

export default SongHistory;
