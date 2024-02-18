import React from "react";
import SearchedSong from "./SearchedSong";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faSadTear } from "@fortawesome/free-solid-svg-icons";
import { useApplicationManager } from "../../contexts/ApplicationContext";
import { useUser } from "../../contexts/UserContext";

const SearchResults = () => {
  const {
    deactivateNavbarVisiblePopup,
    searchResults,
    searchTypeStarted,
    searchQuery,
  } = useApplicationManager();
  const { recommended } = useUser();
  return (
    <div className="w-full h-full px-16 mt-36 overflow-hidden flex flex-col justify-start items-start pt-10s">
      <FontAwesomeIcon
        icon={faArrowLeft}
        className="text-white cursor-pointer text-xl"
        onClick={deactivateNavbarVisiblePopup}
      />

      {searchTypeStarted &&
        (searchResults.length !== 0 ? (
          <div className="w-full">
            <h1 className="text-white mt-6 text-3xl">
              Results for "
              <span className="text-pink-primary">{searchQuery}</span>"
            </h1>
            {searchResults.map((track, index) => {
              return (
                <SearchedSong
                  song={track}
                  imagePath={track.coverImage}
                  songName={track.title}
                  songLength={track.duration}
                  uploadDate={track.releaseDate}
                  songId={track.songId}
                  index={index}
                  libraryName="FOR-YOU"
                  key={track.songId}
                />
              );
            })}
          </div>
        ) : (
          <div className="w-full">
            <h1 className="text-white mt-6 text-3xl">
              Results for "
              <span className="text-pink-primary">{searchQuery}</span>"
            </h1>
            <h1 className="text-[#5d5d5d] mt-2">
              No results found <FontAwesomeIcon icon={faSadTear} />
            </h1>
          </div>
        ))}

      <div className="w-full">
        <h1 className="text-pink-primary mt-6 text-3xl">Recommended</h1>
        {recommended.map((track, index) => {
          return (
            <SearchedSong
              song={track}
              imagePath={track.coverImage}
              songName={track.title}
              songLength={track.duration}
              uploadDate={track.releaseDate}
              songId={track.songId}
              index={index}
              libraryName="FOR-YOU"
              key={track.songId}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SearchResults;
