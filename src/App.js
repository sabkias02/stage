import React from "react";

import Navbar from "./Headers/Navbar";

import Home from "./Home";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from "./Create";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/create" element={<Create />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
