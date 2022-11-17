import React from "react";
import "./BlackHistoryCards.scss";
import Contribute from "./Contribute";
import { Link } from "react-router-dom";
import * as Icon from "react-feather";
// ES6 modules
import sal from "sal.js";

const BlackHistoryCards = () => {
  return (
    <div>
      <main id="main-content">
        <div className="slider-one rn-section-gapTop">
          <div className="container">
            <div className="row row-reverce-sm align-items-center">
              <div className="col-lg-5 col-md-6 col-sm-12 mt_sm--50">
                <h2
                  className="title sal-animate"
                  data-sal-delay="200"
                  data-sal="slide-up"
                  data-sal-duration="800"
                >
                  Discover Digital Pieces Of Black History In The Metaverse
                </h2>
                <p
                  className="slide-disc sal-animate"
                  data-sal-delay="300"
                  data-sal="slide-up"
                  data-sal-duration="800"
                ></p>
                <div className="button-group">
                  <Link to="/" className="btn btn-large btn-primary ">
                    <span>Become a verifier</span>
                  </Link>
                  <Link
                    to="/Create"
                    className="btn btn-large btn-primary-alta "
                  >
                    <span>Create Proposal</span>
                  </Link>
                </div>
              </div>
              <div className="col-lg-5 col-md-6 col-sm-12 offset-lg-1">
                <div className="slider-thumbnail">
                  <span
                    style={{
                      boxSizing: "borderBox",
                      display: "inline-block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: "0px",
                      margin: "0px",
                      padding: "0px",
                      position: "relative",
                      maxWidth: " 100%",
                    }}
                  >
                    <span
                      style={{
                        boxSizing: "borderBox",
                        display: "block",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: "0px",
                        margin: "0px",
                        padding: "0px",
                        maxWidth: " 100%",
                      }}
                    >
                      <img
                        alt=""
                        aria-hidden="true"
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27585%27%20height=%27593%27/%3e"
                        style={{
                          display: "block",
                          maxWidth: " 100%",
                          width: "initial",
                          height: "initial",
                          background: "black",
                          fill: "black",
                          opacity: 1,
                          border: "0px",
                          margin: "0px",
                          padding: " 0px",
                        }}
                      />
                    </span>
                    <img
                      alt="Slider Images"
                      media="(prefers-color-scheme: dark)"
                      src={require("./images/slider-3.jpg")}
                      decoding="async"
                      data-nimg="intrinsic"
                      style={{
                        position: "absolute",
                        inset: "0px",
                        boxSizing: "borderBox",
                        padding: "0px",
                        border: "none",
                        margin: "auto",
                        display: "block",
                        background: "black",
                        fill: "black",
                        width: "0px",
                        height: "0px",
                        minWidth: " 100%",
                        maxWidth: " 100%",
                        minHeight: " 100%",
                        maxHeight: " 100%",
                      }}
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rn-collection-area rn-section-gapTop">
          <div className="container">
            <div className="row mb--50 align-items-center">
              <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                <h3
                  className="title mb--0 sal-animate"
                  data-sal-delay="150"
                  data-sal="slide-up"
                  data-sal-duration="800"
                >
                  Top Historic Collections
                </h3>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt_mobile--15">
                <div
                  className="view-more-btn text-start text-sm-end sal-animate"
                  data-sal-delay="150"
                  data-sal="slide-up"
                  data-sal-duration="800"
                >
                  <a href="/collection" className="btn-transparent">
                    VIEW ALL
                    <Icon.ArrowRight />
                  </a>
                </div>
              </div>
            </div>
            <div className="row g-5">
              <div
                data-sal="slide-up"
                data-sal-delay="150"
                data-sal-duration="800"
                className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12 sal-animate"
              >
                <a href="/collection" className="rn-collection-inner-one">
                  <div className="collection-wrapper">
                    <div className="collection-big-thumbnail">
                      <span
                        style={{
                          boxSizing: "borderBox",
                          display: "inline-block",
                          overflow: "hidden",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: "0px",
                          margin: "0px",
                          padding: "0px",
                          position: "relative",
                          maxWidth: " 100%",
                        }}
                      >
                        <span
                          style={{
                            boxSizing: "borderBox",
                            display: "block",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: " 0px",
                            margin: "0px",
                            padding: "0px",
                            maxWidth: " 100%",
                          }}
                        >
                          <img
                            alt=""
                            aria-hidden="true"
                            src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27507%27%20height=%27339%27/%3e"
                            style={{
                              display: "block",
                              maxWidth: " 100%",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: "0px",
                              margin: "0px",
                              padding: "0px",
                            }}
                          />
                        </span>
                        <img
                          alt="Nft_Profile"
                          className="img-top"
                          src={require("./images/bigSeparate.webp")}
                          decoding="async"
                          data-nimg="intrinsic"
                          style={{
                            position: "absolute",
                            inset: "0px",
                            boxSizing: "borderBox",
                            padding: "0px",
                            border: "none",
                            margin: "auto",
                            display: "block",
                            width: "0px",
                            height: "0px",
                            minWidth: " 100%",
                            maxWidth: " 100%",
                            minHeight: " 100%",
                            maxHeight: " 100%",
                          }}
                        />
                      </span>
                    </div>
                    <div className="collenction-small-thumbnail">
                      <div>
                        <span
                          style={{
                            boxSizing: "borderBox",
                            display: "inline-block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: " none",
                            opacity: 1,
                            border: "0px",
                            margin: "0px",
                            padding: "0px",
                            position: "relative",
                            maxWidth: " 100%",
                          }}
                        >
                          <span
                            style={{
                              boxSizing: "borderBox",
                              display: "block",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: "0px",
                              margin: "0px",
                              padding: "0px",
                              maxWidth: "100%",
                            }}
                          >
                            <img
                              alt=""
                              aria-hidden="true"
                              src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27164%27%20height=%27110%27/%3e"
                              style={{
                                display: "block",
                                maxWidth: " 100%",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: "0px",
                                margin: "0px",
                                padding: "0px",
                              }}
                            />
                          </span>
                          <img
                            alt="Nft_Profile"
                            src={require("./images/firstSeparate.webp")}
                            decoding="async"
                            data-nimg="intrinsic"
                            style={{
                              position: "absolute",
                              inset: " 0px",
                              boxSizing: "borderBox",
                              padding: "0px",
                              border: "none",
                              margin: "auto",
                              display: "block",
                              width: "0px",
                              height: "0px",
                              minWidth: " 100%",
                              maxWidth: " 100%",
                              minHeight: " 100%",
                              maxHeight: " 100%",
                            }}
                          />
                        </span>
                      </div>
                      <div>
                        <span
                          style={{
                            boxSizing: "borderBox",
                            display: "inline-block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: "0px",
                            margin: "0px",
                            padding: "0px",
                            position: "relative",
                            maxWidth: " 100%",
                          }}
                        >
                          <span
                            style={{
                              boxSizing: "borderBox",
                              display: "block",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: "0px",
                              margin: "0px",
                              padding: "0px",
                              maxWidth: " 100%",
                            }}
                          >
                            <img
                              alt=""
                              aria-hidden="true"
                              src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27164%27%20height=%27110%27/%3e"
                              style={{
                                display: "block",
                                maxWidth: " 100%",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: "0px",
                                margin: "0px",
                                padding: "0px",
                              }}
                            />
                          </span>
                          <img
                            alt="Nft_Profile"
                            src={require("./images/second-separate.webp")}
                            decoding="async"
                            data-nimg="intrinsic"
                            style={{
                              position: "absolute",
                              boxSizing: "borderBox",
                              padding: "0px",
                              border: "none",
                              margin: "auto",
                              display: "block",
                              width: "0px",
                              height: "0px",
                              minWidth: "100%",
                              maxWidth: " 100%",
                              minHeight: " 100%",
                              maxHeight: " 100%",
                            }}
                          />
                        </span>
                      </div>
                      <div>
                        <span
                          style={{
                            boxSizing: "borderBox",
                            display: "inline-block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: "0px",
                            margin: "0px",
                            padding: "0px",
                            position: "relative",
                            maxWidth: " 100%",
                          }}
                        >
                          <span
                            style={{
                              boxSizing: "borderBox",
                              display: "block",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: "0px",
                              margin: "0px",
                              padding: "0px",
                              maxWidth: " 100%",
                            }}
                          >
                            <img
                              alt=""
                              aria-hidden="true"
                              src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27164%27%20height=%27110%27/%3e"
                              style={{
                                display: "block",
                                maxWidth: " 100%",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: "0px",
                                margin: "0px",
                                padding: "0px",
                              }}
                            />
                          </span>
                          <img
                            alt="Nft_Profile"
                            src={require("./images/third separate.webp")}
                            decoding="async"
                            data-nimg="intrinsic"
                            style={{
                              position: "absolute",
                              inset: "0px",
                              boxSizing: "borderBox",
                              padding: "0px",
                              border: " none",
                              margin: "auto",
                              display: "block",
                              width: "0px",
                              height: "0px",
                              minWidth: " 100%",
                              maxWidth: " 100%",
                              minHeight: " 100%",
                              maxHeight: " 100%",
                            }}
                          />
                        </span>
                      </div>
                    </div>
                    <div className="collection-deg">
                      <h6 className="title">Separate But Equal</h6>
                      <span className="items">27 items</span>
                    </div>
                  </div>
                </a>
              </div>
              <div
                data-sal="slide-up"
                data-sal-delay="150"
                data-sal-duration="800"
                className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12 sal-animate"
              >
                <a href="/collection" className="rn-collection-inner-one">
                  <div className="collection-wrapper">
                    <div className="collection-big-thumbnail">
                      <span
                        style={{
                          boxSizing: "borderBox",
                          display: "inline - block",
                          overflow: "hidden",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: "0px",
                          margin: "0px",
                          padding: "0px",
                          position: "relative",
                          maxWidth: " 100%",
                        }}
                      >
                        <span
                          style={{
                            boxSizing: "borderBox",
                            display: "block",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: "0px",
                            margin: "0px",
                            padding: "0px",
                            maxWidth: " 100%",
                          }}
                        >
                          <img
                            alt=""
                            aria-hidden="true"
                            src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27507%27%20height=%27339%27/%3e"
                            style={{
                              display: "block",
                              maxWidth: " 100%",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: "0px",
                              margin: "0px",
                              padding: "0px",
                            }}
                          />
                        </span>
                        <img
                          alt="Nft_Profile"
                          className="img-top"
                          src={require("./images/bigJimCrow.webp")}
                          decoding="async"
                          data-nimg="intrinsic"
                          style={{
                            position: "absolute",
                            inset: "0px",
                            boxSizing: "borderBox",
                            padding: "0px",
                            border: " none",
                            margin: "auto",
                            display: "block",
                            width: "0px",
                            height: "0px",
                            minWidth: " 100%",
                            maxWidth: " 100%",
                            minHeight: " 100%",
                            maxHeight: " 100%",
                          }}
                        />
                      </span>
                    </div>
                    <div className="collenction-small-thumbnail">
                      <div>
                        <span
                          style={{
                            boxSizing: "borderBox",
                            display: "inline - block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: "0px",
                            margin: "0px",
                            padding: "0px",
                            position: "relative",
                            maxWidth: " 100%",
                          }}
                        >
                          <span
                            style={{
                              boxSizing: "borderBox",
                              display: "block",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: "0px",
                              margin: "0px",
                              padding: "0px",
                              maxWidth: " 100%",
                            }}
                          >
                            <img
                              alt=""
                              aria-hidden="true"
                              src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27164%27%20height=%27110%27/%3e"
                              style={{
                                display: "block",
                                maxWidth: " 100%",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: "0px",
                                margin: "0px",
                                padding: "0px",
                              }}
                            />
                          </span>
                          <img
                            alt="Nft_Profile"
                            src={require("./images/firstJimcrow.jpeg")}
                            decoding="async"
                            data-nimg="intrinsic"
                            style={{
                              position: "absolute",
                              inset: "0px",
                              boxSizing: "borderBox",
                              padding: "0px",
                              border: " none",
                              margin: "auto",
                              display: "block",
                              width: "0px",
                              height: "0px",
                              minWidth: " 100%",
                              maxWidth: " 100%",
                              minHeight: " 100%",
                              maxHeight: " 100%",
                            }}
                          />
                        </span>
                      </div>
                      <div>
                        <span
                          style={{
                            boxSizing: "borderBox",
                            display: "inline - block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: "0px",
                            margin: "0px",
                            padding: "0px",
                            position: "relative",
                            maxWidth: " 100%",
                          }}
                        >
                          <span
                            style={{
                              boxSizing: "borderBox",
                              display: "block",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: "0px",
                              margin: "0px",
                              padding: "0px",
                              maxWidth: " 100%",
                            }}
                          >
                            <img
                              alt=""
                              aria-hidden="true"
                              src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27164%27%20height=%27110%27/%3e"
                              style={{
                                display: "block",
                                maxWidth: " 100%",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: "0px",
                                margin: "0px",
                                padding: "0px",
                              }}
                            />
                          </span>
                          <img
                            alt="Nft_Profile"
                            src={require("./images/secondJimCrow.jpeg")}
                            decoding="async"
                            data-nimg="intrinsic"
                            style={{
                              position: "absolute",
                              inset: "0px",
                              boxSizing: "borderBox",
                              padding: "0px",
                              border: " none",
                              margin: "auto",
                              display: "block",
                              width: "0px",
                              height: "0px",
                              minWidth: " 100%",
                              maxWidth: " 100%",
                              minHeight: " 100%",
                              maxHeight: " 100%",
                            }}
                          />
                        </span>
                      </div>
                      <div>
                        <span
                          style={{
                            boxSizing: "borderBox",
                            display: "inline - block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: "0px",
                            margin: "0px",
                            padding: "0px",
                            position: "relative",
                            maxWidth: " 100%",
                          }}
                        >
                          <span
                            style={{
                              boxSizing: "borderBox",
                              display: "block",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: "0px",
                              margin: "0px",
                              padding: "0px",
                              maxWidth: " 100%",
                            }}
                          >
                            <img
                              alt=""
                              aria-hidden="true"
                              src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27164%27%20height=%27110%27/%3e"
                              style={{
                                display: "block",
                                maxWidth: " 100%",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: "0px",
                                margin: "0px",
                                padding: "0px",
                              }}
                            />
                          </span>
                          <img
                            alt="Nft_Profile"
                            src={require("./images/thirdJimCrew.jpeg")}
                            decoding="async"
                            data-nimg="intrinsic"
                            style={{
                              position: "absolute",
                              inset: "0px",
                              boxSizing: "borderBox",
                              padding: "0px",
                              border: " none",
                              margin: "auto",
                              display: "block",
                              width: "0px",
                              height: "0px",
                              minWidth: " 100%",
                              maxWidth: " 100%",
                              minHeight: " 100%",
                              maxHeight: " 100%",
                            }}
                          />
                        </span>
                      </div>
                    </div>
                    ,
                    <div className="collection-deg">
                      <h6 className="title">Jim Crow:Equal Opportunity</h6>
                      <span className="items">20 items</span>
                    </div>
                  </div>
                </a>
              </div>
              <div
                data-sal="slide-up"
                data-sal-delay="150"
                data-sal-duration="800"
                className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12 sal-animate"
              >
                <a href="/collection" className="rn-collection-inner-one">
                  <div className="collection-wrapper">
                    <div className="collection-big-thumbnail">
                      <span
                        style={{
                          boxSizing: "borderBox",
                          display: "inline - block",
                          overflow: "hidden",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: "0px",
                          margin: "0px",
                          padding: "0px",
                          position: "relative",
                          maxWidth: " 100%",
                        }}
                      >
                        <span
                          style={{
                            boxSizing: "borderBox",
                            display: "block",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: "0px",
                            margin: "0px",
                            padding: "0px",
                            maxWidth: " 100%",
                          }}
                        >
                          <img
                            alt=""
                            aria-hidden="true"
                            src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27507%27%20height=%27339%27/%3e"
                            style={{
                              display: "block",
                              maxWidth: " 100%",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: "0px",
                              margin: "0px",
                              padding: "0px",
                            }}
                          />
                        </span>
                        <img
                          alt="Nft_Profile"
                          className="img-top"
                          src={require("./images/blacklives.webp")}
                          decoding="async"
                          data-nimg="intrinsic"
                          style={{
                            position: "absolute",
                            inset: "0px",
                            boxSizing: "borderBox",
                            padding: "0px",
                            border: " none",
                            margin: "auto",
                            display: "block",
                            width: "0px",
                            height: "0px",
                            minWidth: " 100%",
                            maxWidth: " 100%",
                            minHeight: " 100%",
                            maxHeight: " 100%",
                          }}
                        />
                      </span>
                    </div>
                    <div className="collenction-small-thumbnail">
                      <div>
                        <span
                          style={{
                            boxSizing: "borderBox",
                            display: "inline - block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: "0px",
                            margin: "0px",
                            padding: "0px",
                            position: "relative",
                            maxWidth: " 100%",
                          }}
                        >
                          <span
                            style={{
                              boxSizing: "borderBox",
                              display: "block",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: "0px",
                              margin: "0px",
                              padding: "0px",
                              maxWidth: " 100%",
                            }}
                          >
                            <img
                              alt=""
                              aria-hidden="true"
                              src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27164%27%20height=%27110%27/%3e"
                              style={{
                                display: "block",
                                maxWidth: " 100%",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: "0px",
                                margin: "0px",
                                padding: "0px",
                              }}
                            />
                          </span>
                          <img
                            alt="Nft_Profile"
                            src={require("./images/firstblacklivesMatter.webp")}
                            decoding="async"
                            data-nimg="intrinsic"
                            style={{
                              position: "absolute",
                              inset: "0px",
                              boxSizing: "borderBox",
                              padding: "0px",
                              border: " none",
                              margin: "auto",
                              display: "block",
                              width: "0px",
                              height: "0px",
                              minWidth: " 100%",
                              maxWidth: " 100%",
                              minHeight: " 100%",
                              maxHeight: " 100%",
                            }}
                          />
                        </span>
                      </div>
                      <div>
                        <span
                          style={{
                            boxSizing: "borderBox",
                            display: "inline - block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: "0px",
                            margin: "0px",
                            padding: "0px",
                            position: "relative",
                            maxWidth: " 100%",
                          }}
                        >
                          <span
                            style={{
                              boxSizing: "borderBox",
                              display: "block",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: "0px",
                              margin: "0px",
                              padding: "0px",
                              maxWidth: " 100%",
                            }}
                          >
                            <img
                              alt=""
                              aria-hidden="true"
                              src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27164%27%20height=%27110%27/%3e"
                              style={{
                                display: "block",
                                maxWidth: " 100%",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: "0px",
                                margin: "0px",
                                padding: "0px",
                              }}
                            />
                          </span>
                          <img
                            alt="Nft_Profile"
                            src={require("./images/secondBlackLivesMatter.webp")}
                            decoding="async"
                            data-nimg="intrinsic"
                            style={{
                              position: "absolute",
                              inset: "0px",
                              boxSizing: "borderBox",
                              padding: "0px",
                              border: " none",
                              margin: "auto",
                              display: "block",
                              width: "0px",
                              height: "0px",
                              minWidth: " 100%",
                              maxWidth: " 100%",
                              minHeight: " 100%",
                              maxHeight: " 100%",
                            }}
                          />
                        </span>
                      </div>
                      <div>
                        <span
                          style={{
                            boxSizing: "borderBox",
                            display: "inline -block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: "0px",
                            margin: "0px",
                            padding: "0px",
                            position: "relative",
                            maxWidth: " 100%",
                          }}
                        >
                          <span
                            style={{
                              boxSizing: "borderBox",
                              display: "block",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: "0px",
                              margin: "0px",
                              padding: "0px",
                              maxWidth: " 100%",
                            }}
                          >
                            <img
                              alt=""
                              aria-hidden="true"
                              src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27164%27%20height=%27110%27/%3e"
                              style={{
                                display: "block",
                                maxWidth: " 100%",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: "0px",
                                margin: "0px",
                                padding: "0px",
                              }}
                            />
                          </span>
                          <img
                            alt="Nft_Profile"
                            src={require("./images/thirdblacklivesMatter.webp")}
                            decoding="async"
                            data-nimg="intrinsic"
                            style={{
                              position: "absolute",
                              inset: "0px",
                              boxSizing: "borderBox",
                              padding: "0px",
                              border: " none",
                              margin: "auto",
                              display: "block",
                              width: "0px",
                              height: "0px",
                              minWidth: " 100%",
                              maxWidth: " 100%",
                              minHeight: " 100%",
                              maxHeight: " 100%",
                            }}
                          />
                        </span>
                      </div>
                    </div>
                    <div className="collection-deg">
                      <h6 className="title">Black Lives Matter -06/20</h6>
                      <span className="items">15 items</span>
                    </div>
                  </div>
                </a>
              </div>
              <div
                data-sal="slide-up"
                data-sal-delay="150"
                data-sal-duration="800"
                className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12 sal-animate"
              >
                <a href="/collection" className="rn-collection-inner-one">
                  <div className="collection-wrapper">
                    <div className="collection-big-thumbnail">
                      <span
                        style={{
                          boxSizing: "borderBox",
                          display: "inline - block",
                          overflow: "hidden",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: "0px",
                          margin: "0px",
                          padding: "0px",
                          position: "relative",
                          maxWidth: " 100%",
                        }}
                      >
                        <span
                          style={{
                            boxSizing: "borderBox",
                            display: "block",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: "0px",
                            margin: "0px",
                            padding: "0px",
                            maxWidth: " 100%",
                          }}
                        >
                          <img
                            alt=""
                            aria-hidden="true"
                            src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27507%27%20height=%27339%27/%3e"
                            style={{
                              display: "block",
                              maxWidth: " 100%",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: "0px",
                              margin: "0px",
                              padding: "0px",
                            }}
                          />
                        </span>
                        <img
                          alt="Nft_Profile"
                          className="img-top"
                          src={require("./images/till1.webp")}
                          decoding="async"
                          data-nimg="intrinsic"
                          style={{
                            position: "absolute",
                            inset: "0px",
                            boxSizing: "borderBox",
                            padding: "0px",
                            border: " none",
                            margin: "auto",
                            display: "block",
                            width: "0px",
                            height: "0px",
                            minWidth: " 100%",
                            maxWidth: " 100%",
                            minHeight: " 100%",
                            maxHeight: " 100%",
                          }}
                        />
                      </span>
                    </div>
                    <div className="collenction-small-thumbnail">
                      <div>
                        <span
                          style={{
                            boxSizing: "borderBox",
                            display: "inline -block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: "0px",
                            margin: "0px",
                            padding: "0px",
                            position: "relative",
                            maxWidth: " 100%",
                          }}
                        >
                          <span
                            style={{
                              boxSizing: "borderBox",
                              display: "block",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: "0px",
                              margin: "0px",
                              padding: "0px",
                              maxWidth: " 100%",
                            }}
                          >
                            <img
                              alt=""
                              aria-hidden="true"
                              src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27164%27%20height=%27110%27/%3e"
                              style={{
                                display: "block",
                                maxWidth: " 100%",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: "0px",
                                margin: "0px",
                                padding: "0px",
                              }}
                            />
                          </span>
                          <img
                            alt="Nft_Profile"
                            src={require("./images/till2.webp")}
                            decoding="async"
                            data-nimg="intrinsic"
                            style={{
                              position: "absolute",
                              inset: "0px",
                              boxSizing: "borderBox",
                              padding: "0px",
                              border: " none",
                              margin: "auto",
                              display: "block",
                              width: "0px",
                              height: "0px",
                              minWidth: " 100%",
                              maxWidth: " 100%",
                              minHeight: " 100%",
                              maxHeight: " 100%",
                            }}
                          />
                        </span>
                      </div>
                      <div>
                        <span
                          style={{
                            boxSizing: "borderBox",
                            display: "inline - block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: "0px",
                            margin: "0px",
                            padding: "0px",
                            position: "relative",
                            maxWidth: " 100%",
                          }}
                        >
                          <span
                            style={{
                              boxSizing: "borderBox",
                              display: "block",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: "0px",
                              margin: "0px",
                              padding: "0px",
                              maxWidth: " 100%",
                            }}
                          >
                            <img
                              alt=""
                              aria-hidden="true"
                              src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27164%27%20height=%27110%27/%3e"
                              style={{
                                display: "block",
                                maxWidth: " 100%",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: "0px",
                                margin: "0px",
                                padding: "0px",
                              }}
                            />
                          </span>
                          <img
                            alt="Nft_Profile"
                            src={require("./images/till3.webp")}
                            decoding="async"
                            data-nimg="intrinsic"
                            style={{
                              position: "absolute",
                              inset: "0px",
                              boxSizing: "borderBox",
                              padding: "0px",
                              border: " none",
                              margin: "auto",
                              display: "block",
                              width: "0px",
                              height: "0px",
                              minWidth: " 100%",
                              maxWidth: " 100%",
                              minHeight: " 100%",
                              maxHeight: " 100%",
                            }}
                          />
                        </span>
                      </div>
                      <div>
                        <span
                          style={{
                            boxSizing: "borderBox",
                            display: "inline - block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: "0px",
                            margin: "0px",
                            padding: "0px",
                            position: "relative",
                            maxWidth: " 100%",
                          }}
                        >
                          <span
                            style={{
                              boxSizing: "borderBox",
                              display: "block",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: "0px",
                              margin: "0px",
                              padding: "0px",
                              maxWidth: " 100%",
                            }}
                          >
                            <img
                              alt=""
                              aria-hidden="true"
                              src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27164%27%20height=%27110%27/%3e"
                              style={{
                                display: "block",
                                maxWidth: " 100%",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: "0px",
                                margin: "0px",
                                padding: "0px",
                              }}
                            />
                          </span>
                          <img
                            alt="Nft_Profile"
                            src={require("./images/till4.webp")}
                            decoding="async"
                            data-nimg="intrinsic"
                            style={{
                              position: "absolute",
                              inset: "0px",
                              boxSizing: "borderBox",
                              padding: "0px",
                              border: "none",
                              margin: "auto",
                              display: "block",
                              width: "0px",
                              height: "0px",
                              minWidth: " 100%",
                              maxWidth: " 100%",
                              minHeight: " 100%",
                              maxHeight: " 100%",
                            }}
                          />
                        </span>
                      </div>
                    </div>
                    <div className="collection-deg">
                      <h6 className="title">Emmett Till</h6>
                      <span className="items">27 items</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <Contribute />
      </main>
    </div>
  );
};

export default BlackHistoryCards;
sal();
