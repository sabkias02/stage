import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import SearchBar from "./components/SearchBar";
import reportWebVitals from "./reportWebVitals";
import "mdbreact/dist/css/mdb.css";
import "./styles";
import "./scripts";
import "./views";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SearchBar />
  </React.StrictMode>
);

reportWebVitals();
