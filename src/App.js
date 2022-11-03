import React from "react";
import Contribute from "./Contribute";

import Navbar from "./Headers/Navbar";
import BlackHistoryCards from "./BlackHistoryCards";
import Filteritems from "./Filteritems";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BlackHistoryCards />

      <Filteritems />

      <Contribute />
    </div>
  );
}

export default App;
