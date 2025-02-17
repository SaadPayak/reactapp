import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import NavigationLogo from "./NavigationLogo";
import NavigationAvatar from "./NavigationAvatar";
import { useApplicationManager } from "../../contexts/ApplicationContext";
import SearchResults from "../Reusables/SearchResults";

const NavigationBarDesktop = () => {
  // image width
  const { activateNavbarVisiblePopup, searchQuery, handleSearchQueryChange } =
    useApplicationManager();

  return (
    <>
      {/* TANZILA Logo ⬇️ */}
      <NavigationLogo />
      {/* Search bar ⬇️ */}
      <div className="min-w-[70%] h-8">
        <div className="bg-black-search-bar min-w-[300px] w-[500px] h-10 flex overflow-hidden rounded-lg">
          <div className="h-full w-16 flex justify-center items-center">
            <FontAwesomeIcon icon={faMagnifyingGlass} flip="horizontal" />
          </div>
          <input
            onFocus={() => activateNavbarVisiblePopup(<SearchResults />)}
            value={searchQuery}
            onChange={(e) => handleSearchQueryChange(e.target.value)}
            placeholder="Search by songs, artists or lyrics . . ."
            className="w-full h-full bg-transparent outline-none border-none placeholder:text-black-search-bar-placeholder"
          />
        </div>
      </div>
      {/* Profile Icon ⬇️ */}
      <NavigationAvatar />
    </>
  );
};

export default NavigationBarDesktop;
