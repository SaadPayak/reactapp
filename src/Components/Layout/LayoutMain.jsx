import React from "react";

const LayoutMain = (props) => {
  return (
    <div className="bg-black-main w-screen h-screen">{props.children}</div>
  );
};

export default LayoutMain;
