import React, { useState } from "react";
import toast from "react-hot-toast";
import PuffLoader from "react-spinners/PuffLoader";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { allSongs } from "../../data/Songs/songs";

const CaptureLyrics = ({
  isCapturing,
  foundSong,
  setIsCapturing,
  setFoundSong,
  setNotFound,
}) => {
  const [capturedlyrics, setCapturedLyrics] = useState("");
  const [speechRecognizer, setSpeechRecognizer] = useState(null);
  const [isHindiOptimized, setIsHindiOptimized] = useState(false);

  const startConverting = () => {
    setIsCapturing(true);
    // setCapturedLyrics("");
    if ("webkitSpeechRecognition" in window) {
      const speech = new window.webkitSpeechRecognition();
      speech.continuous = true;
      speech.interimResults = true;
      speech.lang = isHindiOptimized ? "en-IN" : "en-US";
      speech.start();

      setSpeechRecognizer(speech);

      let finalTranscripts = "";

      speech.onresult = (event) => {
        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
          transcript.replace("\n", "<br>");
          if (event.results[i].isFinal) {
            finalTranscripts += transcript;
            setCapturedLyrics(finalTranscripts);
          }
        }
      };

      speech.onspeechend = async () => {
        setCapturedLyrics(finalTranscripts);
        console.log("Sending Request...");
        // setFoundSong(
        //   allSongs.all.find((song) => song.songId === result.data.song_id)
        //   allSongs.all.find(
        //     (song) => song.songId === "2ee2ace6515b49f5bb5180bfaa05b120"
        //   )
        // );
        try {
          const result = await axios.post(
            "http://krutikmaruuu.pythonanywhere.com/predict",
            {
              lyrics: finalTranscripts,
            }
          );
          console.log(result);
          if (result.data.status === "success") {
            console.log(
              allSongs.all.find((song) => song.songId === result.data.song_id)
            );
            setFoundSong(
              allSongs.all.find((song) => song.songId === result.data.song_id)
              // allSongs.all.find(
              //   (song) => song.songId === "2ee2ace6515b49f5bb5180bfaa05b120"
              // )
            );
          } else if (result.data.status === "failure") {
            setNotFound(true);
          }
        } catch (e) {
          console.log(e);
        } finally {
          setIsCapturing(false);
        }
      };

      speech.onerror = (event) => {
        console.log(event);
        console.log(capturedlyrics);
        toast.error("Error");
        setIsCapturing(false);
      };
    } else {
      toast.error("Unsupported Browser");
    }
  };

  const stopConverting = () => {
    setIsCapturing(false);
    console.log(capturedlyrics);
    if (speechRecognizer) {
      speechRecognizer.stop();
    }
  };

  const explicityProceed = () => {
    if (speechRecognizer) {
      speechRecognizer.stop();
    }
  };

  if (!isCapturing) {
    return (
      <Start {...{ isHindiOptimized, setIsHindiOptimized, startConverting }} />
    );
  } else {
    return (
      <Capturing {...{ capturedlyrics, stopConverting, explicityProceed }} />
    );
  }
};

export default CaptureLyrics;

const Start = ({ isHindiOptimized, setIsHindiOptimized, startConverting }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="flex flex-col min-h-screen  justify-start items-start mt-8"
    >
      <div className="flex justify-start items-center">
        <h1 className="text-sm text-[#858585] mr-2 py-2">Optimize for</h1>
        <span
          className="mr-3 text-sm py-1  px-4 border-[1px] border-pink-primary rounded-2xl cursor-pointer"
          style={{ background: isHindiOptimized ? "#fc3c44" : "transparent" }}
          onClick={() => setIsHindiOptimized(true)}
        >
          Hindi
        </span>
        <span
          className="text-sm py-1  px-4 border-[1px] border-pink-primary rounded-2xl cursor-pointer"
          style={{ background: !isHindiOptimized ? "#fc3c44" : "transparent" }}
          onClick={() => setIsHindiOptimized(false)}
        >
          English
        </span>
      </div>
      <div className="w-full flex flex-col justify-center items-center min-h-[300px]">
        <button
          onClick={startConverting}
          className="bg-pink-primary py-2 px-7 text-sm text-white rounded-md"
        >
          Uncover
        </button>
        <span className="mt-2 text-[#616161] text-xs">
          Click 'Uncover' to start identifying your song
        </span>
      </div>
    </motion.div>
  );
};

const Capturing = ({ capturedlyrics, stopConverting, explicityProceed }) => {
  console.log(capturedlyrics);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="flex flex-col  justify-start items-start"
    >
      <div className="w-full flex flex-col justify-center items-center min-h-[300px]">
        <PuffLoader color="#fc3c44" size={70} />
      </div>
      <div className="w-full">
        <div className="w-full flex justify-between items-center space-x-4">
          <button
            onClick={stopConverting}
            className="border-2 border-red-600 text-sm py-2 px-4 rounded-md"
          >
            Go Back
            <FontAwesomeIcon icon={faRightFromBracket} className="ml-2" />
          </button>
          {Math.abs((capturedlyrics.length / 30).toFixed(2) * 100) >= 100 && (
            <motion.button
              onClick={explicityProceed}
              className="bg-pink-primary py-2 px-7 text-sm text-white rounded-md"
            >
              Proceed Anyways
            </motion.button>
          )}
        </div>
        <div className="w-full mt-6">
          <div className="w-full h-2 rounded-lg relative bg-[#313131] overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-pink-primary rounded-sm transition-all duration-150 ease-in-out"
              style={{
                width:
                  Math.abs((capturedlyrics.length / 30).toFixed(2) * 100) >= 100
                    ? "100%"
                    : `${Math.abs(
                        (capturedlyrics.length / 30).toFixed(2) * 100
                      )}%`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
