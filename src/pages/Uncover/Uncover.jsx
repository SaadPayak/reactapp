import React, { useState } from "react";
import CaptureLyrics from "../../Components/Uncover/CaptureLyrics";
import FoundSong from "./FoundSong";
import NotFound from "./NotFound";

const Uncover = () => {
  const [isCapturing, setIsCapturing] = useState(false);
  const [foundSong, setFoundSong] = useState(null);
  const [notFound, setNotFound] = useState(false);

  if (foundSong) {
    return <FoundSong foundSong={foundSong} />;
  }
  if (notFound) {
    return <NotFound setNotFound={setNotFound} />;
  }
  return (
    <div className="text-white">
      <CaptureLyrics
        {...{
          isCapturing,
          foundSong,
          setIsCapturing,
          setFoundSong,
          setNotFound,
        }}
      />
    </div>
  );
};

export default Uncover;
