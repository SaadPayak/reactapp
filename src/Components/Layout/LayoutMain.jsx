import React from "react";
import TopNavigation from "../TopNavigation/TopNavigation";

const LayoutMain = (props) => {
  return (
    <div className="bg-black-main w-screen h-screen font-noto">
      <TopNavigation />
      {props.children}
    </div>
  );
};

export default LayoutMain;
