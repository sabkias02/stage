import React from "react";
import "./Progress.scss";
import "react-toastify/dist/ReactToastify.css";
import * as Icon from "react-feather";

const Progress = () => {
  return (
    <div>
      <div
        className="rn-progress-parent rn-backto-top-active"
        role="button"
        tabindex="-1"
      >
        <svg
          className="rn-back-circle svg-inner"
          style={{
            width: "100%",
            height: "100%",
            viewBox: "-1 -1 102 102",
            fill: "transparent",
            stroke: "black",
          }}
        >
          <path
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            style={{
              transition: "stroke-dashoffset 10ms linear 0s",
              strokeDasharray: "307.919, 307.919",
              strokeDashoffset: 0,
            }}
          ></path>
          <Icon.ChevronUp
            style={{
              fill: "white",
              alignmentBaseline: "middle",
              X: "100px",
              Y: "100px",
            }}
          />
        </svg>
      </div>
      <div className="Toastify"></div>
    </div>
  );
};

export default Progress;
