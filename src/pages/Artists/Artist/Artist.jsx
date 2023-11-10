import React from "react";
import { useParams } from "react-router-dom";
import { artists } from "../../../data/Artists/artists";
import ArtistBanner from "../../../Components/Artists/Artist/ArtistBanner";

const Artist = () => {
  const { id } = useParams();
  const artist = artists.find((artist) => artist.navigationUrl === id);

  console.log(artist);
  console.log(`assets/images/artists/${artist.imageName}`);

  return (
    <div className="">
      <div className="w-full min-h-screen ">
        {/* Artist Banner */}
        <ArtistBanner artist={artist} />
      </div>
    </div>
  );
};

export default Artist;
