import React from "react";
import GreetUser from "../../Components/Dashboard/GreetUser";
import ForYou from "../../Components/Dashboard/ForYou";
import ArtistsPanel from "../../Components/Dashboard/ArtistsPanel";

const Dashboard = () => {
  return (
    <div className="text-white-text-main font-noto min-w-full min-h-screen overflow-hidden">
      <div className="min-h-screen min-w-full  flex flex-col items-start justify-start border-pink-primary">
        <GreetUser />
        <ForYou />
        <ArtistsPanel />
      </div>
    </div>
  );
};

export default Dashboard;
