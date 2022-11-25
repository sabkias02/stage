import React, { useState, useEffect } from "react";
import "./ProgressBar.scss";
import "react-toastify/dist/ReactToastify.css";
import * as Icon from "react-feather";

const ProgressBar = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    setScrollTop(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      <div id="progress">
        <span id="progress-value" style={{ width: "${scrollTop}%" }}>
          &#x2B61;
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
