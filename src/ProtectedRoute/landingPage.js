import React from "react";
import Auth from "./auth";

export default function landingPage(props) {
  return (
    <div>
      <h1>Landing page </h1>
      <button
        onClick={() => {
          Auth.login(() => {
            props.history.push("/app");
          });
        }}
      >
        Login
      </button>
    </div>
  );
}
