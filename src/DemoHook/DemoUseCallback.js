import React, { useState, useCallback } from "react";

import DemoHookChildren from "./child";

export default function DemoUseCallback(props) {
  let [like, setLike] = useState(1);

  const renderNotify = () => {
    return `Bạn đã thả ${like} !`;
  };

  let callBackRenderNotify = useCallback(renderNotify, [like]);

  return (
    <div className="m-5">
      <div
        className="card text-left"
        style={{ width: "200px", height: "300px" }}
      >
        <div className="card-body">
          <h4 className="card-title text-danger">
            {like} <i className="fa fa-heart"></i>
          </h4>
        </div>
      </div>

      <p>{renderNotify()}</p>

      <button
        className="btn btn-success"
        onClick={() => {
          setLike(like + 1);
        }}
      >
        +
      </button>
      {/* <DemoHookChildren renderNotify={callBackRenderNotify} /> */}
    </div>
  );
}
