import React, { useState } from "react";

import "./SearchBar.css";
import * as Icon from "react-feather";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };
  return (
    <div>
      <div className="container">
        <img
          src={require(`./images/unnamed-1.png`)}
          loading="lazy"
          width="225"
          sizes="225px"
          alt=""
          className="image-4-copy"
        />
        <h1 className="heading-2">Black History Archive System</h1>
        <a
          href="https://blackhistorydao-4dc6cb.netlify.live/"
          className="w-inline-block"
        >
          <img
            src={require(`./images/BHM-2022-web-header.png`)}
            loading="lazy"
            width="932"
            sizes="(max-width: 991px) 100vw, 932px"
            alt=""
            className="image-4"
          />
        </a>
        <div className="auto-search-wrapper">
          <div className="form-block w-form">
            <form
              id="search-form"
              name="email-form"
              data-name="Email Form"
              method="get"
              className="form"
              autofocus="true"
            >
              <div className="searchInputs">
                <input
                  type="text"
                  className="search-box w-input"
                  maxlength="256"
                  name="Search"
                  data-name="Search"
                  placeholder={placeholder}
                  id="Search"
                  required=""
                  value={wordEntered}
                  onChange={handleFilter}
                />
                <div className="searchIcon">
                  <Icon.Search />
                </div>
              </div>
            </form>
            <div className="w-form-done">
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div className="w-form-fail">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
