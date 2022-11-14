import React from "react";
import BlackHistoryCards from "./BlackHistoryCards";
import sal from "sal.js";
import Navbar from "./Headers/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BlackHistoryCards />
      {/*<Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/create" element={<Create />} />
        </Routes>*/}
    </div>
  );
}

export default App;
