import React from "react";

import Home from "./Home";
import Create from "./Create";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Headers/Navbar";
import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/Create" element={<Create />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
