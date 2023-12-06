import React, { useEffect } from "react";
import GreetUser from "../../Components/Dashboard/GreetUser";
import ForYou from "../../Components/Dashboard/ForYou";
import ArtistsPanel from "../../Components/Dashboard/ArtistsPanel";
import { useApplicationManager } from "../../contexts/ApplicationContext";
import Trending from "../../Components/Dashboard/Trending";

const Dashboard = () => {
  const { setSelectedMenubarItemId } = useApplicationManager();
  useEffect(() => {
    setSelectedMenubarItemId(1);
  }, [setSelectedMenubarItemId]);
  return (
    <div className="text-white-text-main font-lexend min-w-full min-h-screen overflow-hidden">
      <div className="min-h-screen min-w-full  flex flex-col items-start justify-start border-pink-primary">
        <GreetUser />
        {/* <Trending /> */}
        <ForYou />
        <ArtistsPanel />
      </div>
    </div>
  );
};

export default Dashboard;
