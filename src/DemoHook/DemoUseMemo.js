import React, { useState, useMemo } from "react";
import DemoHookChildren from "./child";

export default function DemoUseMemo() {
  const [like, setLike] = useState(1);
  let cart = [
    { id: 1, name: "htc phone", price: 1000 },
    { id: 2, name: "lg phone", price: 2000 },
    { id: 3, name: "iphone", price: 3000 },
  ];
  const cartMemo = useMemo(() => cart, [like]);

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

      <button
        className="btn btn-success"
        onClick={() => {
          setLike(like + 1);
        }}
      >
        +
      </button>
      <DemoHookChildren cart={cartMemo} />
    </div>
  );
}
