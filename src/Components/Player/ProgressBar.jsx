import React from "react";

const ProgressBar = ({ songInfo, dragHandler }) => {
  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const trackAnim = {
    transform: `translateX(${songInfo.animationPercentage}%)`,
  };

  return (
    <div className="w-full h-5 flex items-center justify-between font-semibold text-sm text-[#7c7c7c]">
      <p>{getTime(songInfo.currentTime)}</p>
      <div className="w-[100%] mx-4 h-[6px] bg-[#fc3c44] rounded-full overflow-hidden relative">
        <input
          className="song-range"
          min={0}
          max={songInfo.duration || 0}
          value={songInfo.currentTime}
          onChange={dragHandler}
          type="range"
        />
        <div
          className="h-full w-full absolute top-0 left-0 pointer-events-none bg-[#ccc] transition-all duration-75 ease-in-out"
          style={trackAnim}
        />
      </div>
      <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
    </div>
  );
};

export default ProgressBar;
