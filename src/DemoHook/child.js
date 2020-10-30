import React, { memo } from "react";

const DemoHookChildren = () => {
  console.log("DemoHookChildren re-render");
  return (
    <div>
      <h1>Child component</h1>
    </div>
  );
};

export default memo(DemoHookChildren) ;
