import React, { useState } from "react";
import CaptureLyrics from "../../Components/Uncover/CaptureLyrics";

const Uncover = () => {
  const [isCapturing, setIsCapturing] = useState(false);
  const [foundSong, setFoundSong] = useState(null);

  return (
    <div className="text-white">
      <CaptureLyrics
        {...{ isCapturing, foundSong, setIsCapturing, setFoundSong }}
      />
    </div>
  );
};

export default Uncover;
