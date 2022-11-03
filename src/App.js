import React from "react";

import Navbar from "./Headers/Navbar";
import BlackHistoryCards from "./BlackHistoryCards";
import Filteritems from "./Filteritems";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BlackHistoryCards />
      <br />
      <br />
      <Filteritems />
    </div>
  );
}

export default App;
