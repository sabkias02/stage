import React from "react";
import "./Footers.scss";
import * as Icon from "react-feather";

const Footers = () => {
  return (
    <div>
      <div className="rn-footer-one bg-color--1 rn-section-gap mt--100 mt_md--80 mt_sm--80">
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="widget-content-wrapper">
                <div className="footer-left">
                  <div className="logo-thumbnail logo-custom-css">
                    <a href="/" className="logo-light">
                      <span
                        style={{
                          boxSizing: "borderBox",
                          display: "inline-block",
                          overflow: " hidden",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: " 0px",
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
                            src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27106%27%20height=%2735%27/%3e"
                            style={{
                              display: "block",
                              maxWidth: " 100%",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: " 0px",
                              margin: "0px",
                              padding: "0px",
                            }}
                          />
                        </span>
                        <img
                          alt="logo"
                          src={require("./logo.png")}
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
                            height: " 0px",
                            minWidth: " 100%",
                            maxWidth: " 100%",
                            minHeight: " 100%",
                            maxHeight: " 100%",
                          }}
                        />
                      </span>
                    </a>
                  </div>
                  <p className="rn-footer-describe">
                    Created with the collaboration of over 100 historians and
                    contributers{" "}
                  </p>
                </div>
                <div className="widget-bottom mt--40 pt--40">
                  <h6 className="title">Get The Latest Updates</h6>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control bg-color--2"
                      placeholder="Email"
                      aria-label="Recipient's username"
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-primary-alta btn-outline-secondary"
                        type="button"
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                  <div className="newsletter-dsc">
                    <p>Email is safe. We don't spam.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt_mobile--40">
              <div className="footer-widget widget-quicklink">
                <h6 className="widget-title">Black History Dao</h6>
                <ul
                  className="footer-list-one"
                  style={{ listStyleType: "none" }}
                >
                  <li className="single-list">
                    <a href="/">Enter the Metaverse</a>
                  </li>
                  <li className="single-list">
                    <a href="/">Visit our dao</a>
                  </li>
                  <li className="single-list">
                    <a href="/">Team Members</a>
                  </li>
                  <li className="single-list">
                    <a href="/">Become a Sponsor</a>
                  </li>
                  <li className="single-list">
                    <a href="/">Join our Newsletter</a>
                  </li>
                  <li className="single-list">
                    <a href="/"></a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt_md--40 mt_sm--40">
              <div className="footer-widget widget-information">
                <h6 className="widget-title">Information</h6>
                <ul
                  className="footer-list-one"
                  style={{ listStyleType: "none" }}
                >
                  <li className="single-list">
                    <a href="/">Contact Us</a>
                  </li>
                  <li className="single-list">
                    <a href="/">Join the Team</a>
                  </li>
                  <li className="single-list">
                    <a href="/">Internships</a>
                  </li>
                  <li className="single-list">
                    <a href="/"></a>
                  </li>
                  <li className="single-list">
                    <a href="/"></a>
                  </li>
                  <li className="single-list">
                    <a href="/"></a>
                  </li>
                  <li className="single-list">
                    <a href="/"></a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt_md--40 mt_sm--40">
              <div className="footer-widget">
                <h6 className="widget-title">Recently Sold Out</h6>
                <ul
                  className="footer-recent-post"
                  style={{ listStyleType: "none" }}
                >
                  <li className="recent-post">
                    <div className="thumbnail">
                      <a href="/product">
                        <span
                          style={{
                            boxSizing: "borderBox",
                            display: "inline-block",
                            overflow: "hidden",
                            width: "60px",
                            height: "60px",
                            background: "none",
                            opacity: 1,
                            border: "0px",
                            margin: "0px",
                            padding: "0px",
                            position: "relative",
                          }}
                        >
                          <img
                            alt="product Images"
                            src={require("./images/Flyod.webp")}
                            decoding="async"
                            data-nimg="fixed"
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
                              borderRadius: "50%",
                            }}
                          />
                        </span>
                      </a>
                    </div>
                    <div className="content">
                      <h6 className="title">
                        <a href="/product">I CAN'T BREATHE George Floyd</a>
                      </h6>
                      <p>Highest bid 1/20</p>
                      <span className="price">0.244wETH</span>
                    </div>
                  </li>
                  <li className="recent-post">
                    <div className="thumbnail">
                      <a href="/product">
                        <span
                          style={{
                            boxSizing: "borderBox",
                            display: "inline-block",
                            overflow: "hidden",
                            width: "60px",
                            height: "60px",
                            background: "none",
                            opacity: 1,
                            border: "0px",
                            margin: "0px",
                            padding: "0px",
                            position: "relative",
                          }}
                        >
                          <img
                            alt="product Images"
                            src={require("./images/JimcrowRond.webp")}
                            decoding="async"
                            dataNimg="fixed"
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
                              borderRadius: "50%",
                            }}
                          />
                        </span>
                      </a>
                    </div>
                    <div className="content">
                      <h6 className="title">
                        <a href="/product">Jim Crow Excerpt</a>
                      </h6>
                      <p>Highest bid 1/20</p>
                      <span className="price">0.022wETH</span>
                    </div>
                  </li>
                  <li className="recent-post">
                    <div className="thumbnail">
                      <a href="/product">
                        <span
                          style={{
                            boxSizing: "borderBox",
                            display: "inline-block",
                            overflow: "hidden",
                            width: "60px",
                            height: "60px",
                            background: "none",
                            opacity: 1,
                            border: "0px",
                            margin: "0px",
                            padding: "0px",
                            position: "relative",
                          }}
                        >
                          <img
                            alt="product Images"
                            src={require("./images/till1.webp")}
                            decoding="async"
                            dataNimg="fixed"
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
                              borderRadius: "50%",
                            }}
                          />
                        </span>
                      </a>
                    </div>
                    <div className="content">
                      <h6 className="title">
                        <a href="/product">Unrevealed Emmett Till audio</a>
                      </h6>
                      <p>Highest bid 1/20</p>
                      <span className="price">0.892wETH</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-right-one ptb--20 bg-color--1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="copyright-left">
                <span>©2022 Black History DAO. All rights reserved</span>
                <ul className="privacy" style={{ listStyleType: "none" }}>
                  <li>
                    <a href="https://demo.blackhistorydao.org/terms-condition">
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a href="https://demo.blackhistorydao.org/privacy-policy">
                      *Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="copyright-right">
                <ul
                  className="social-copyright"
                  style={{ listStyleType: "none" }}
                >
                  <li>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Facebook"
                    >
                      <Icon.Facebook
                        style={{
                          fontStyle: "normal",
                          fontWeight: 400,

                          fontSize: "10px",
                          textTransform: "none",
                          lineHeight: 1,

                          color: "#acacac",
                        }}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Twitter"
                    >
                      <Icon.Twitter
                        style={{
                          fontStyle: "normal",
                          fontWeight: 400,

                          fontSize: "10px",
                          textTransform: "none",
                          lineHeight: 1,

                          color: "#acacac",
                        }}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Instagram"
                    >
                      <Icon.Instagram
                        style={{
                          fontStyle: "normal",
                          fontWeight: 400,

                          fontSize: "10px",
                          textTransform: "none",
                          lineHeight: 1,

                          color: "#acacac",
                        }}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="linkedin"
                    >
                      <Icon.Linkedin
                        style={{
                          fontStyle: "normal",
                          fontWeight: 400,

                          fontSize: "10px",
                          textTransform: "none",
                          lineHeight: 1,

                          color: "#acacac",
                        }}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://mail.com"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="mail"
                    >
                      <Icon.Mail
                        style={{
                          fontStyle: "normal",
                          fontWeight: 400,

                          fontSize: "10px",
                          textTransform: "none",
                          lineHeight: 1,

                          color: "#acacac",
                        }}
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footers;
