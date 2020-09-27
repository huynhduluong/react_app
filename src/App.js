import React from "react";
import "./App.css";
import StateLessComponent from "./components/StateLessComponent";
import StateFull, { StateFullComponent } from "./components/StateFullComponent";
import Home from "./BTChiaComponent/Home";

function App() {
  return (
    <div>
      {/* <StateLessComponent />
      <StateFullComponent />
      <StateFull /> */}
      <Home />
    </div>
  );
}

export default App;
