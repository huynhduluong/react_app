import React from "react";
import Auth from "./auth";

export default function AppLayout(props) {
  return (
    <div>
      <h1>App Layout</h1>
      <button
        onClick={() => {
          Auth.logout(() => {
            props.history.push("/");
          });
        }}
      >
        Log out
      </button>
    </div>
  );
}
