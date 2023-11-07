import {
  faBackward,
  faForward,
  faPause,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useEffect, useRef, useState } from "react";

const Controls = ({
  audioRef,
  progressBarRef,
  duration,
  setTimeProgress,
  playNextSong,
  playPreviousSong,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const playAnimationRef = useRef();

  const repeat = useCallback(() => {
    const currentTime = audioRef.current.currentTime;
    setTimeProgress(currentTime);
    progressBarRef.current.value = currentTime;
    progressBarRef.current.style.setProperty(
      "--range-progress",
      `${(progressBarRef.current.value / duration) * 100}%`
    );
    if (Math.round((progressBarRef.current.value / duration) * 100) === 100) {
      playNextSong();
    }
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [audioRef, duration, progressBarRef, setTimeProgress, playNextSong]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [isPlaying, audioRef, repeat]);

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };
  return (
    <div>
      <div className=" flex justify-center items-center text-xl ">
        <div
          className=" cursor-pointer flex justify-center items-center w-10 mx-2 text-[#7c7c7c]"
          onClick={playPreviousSong}
        >
          <FontAwesomeIcon icon={faBackward} />
        </div>
        {isPlaying ? (
          <div
            className="cursor-pointer flex justify-center items-center w-10 mx-2"
            onClick={togglePlayPause}
          >
            <FontAwesomeIcon icon={faPause} />
          </div>
        ) : (
          <div
            className="cursor-pointer flex justify-center items-center w-10 mx-2"
            onClick={togglePlayPause}
          >
            <FontAwesomeIcon icon={faPlay} />
          </div>
        )}
        <div
          className="cursor-pointer flex justify-center items-center w-10 mx-2 text-[#7c7c7c]"
          onClick={playNextSong}
        >
          <FontAwesomeIcon icon={faForward} />
        </div>
      </div>
    </div>
  );
};

export default Controls;
