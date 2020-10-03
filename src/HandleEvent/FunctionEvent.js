import React from "react";

export default function FunctionEvent() {
  const handleClick = () => {
    alert("click me");
  };

  const handleClickParams = (message) => {
    alert(message);
  };

  return (
    <div>
      <h2>Function Event</h2>
      {/* xử lý sự kiện trong js thuần */}
      {/* <button onclick="handleClick">Click me</button> */}
      {/* xử lý sự kiện trong reactjs */}
      <button onClick={handleClick}>Click Reactjs</button>
      <button onClick={() => handleClickParams("Hello World")}>
        Click ReactJS params
      </button>
    </div>
  );
}
