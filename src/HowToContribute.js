import React from "react";

import sal from "sal.js";
import "./Contribute.scss";

const HowToContribute = () => {
  return (
    <div>
      <div className="rn-service-area rn-section-gapTop">
        <div className="container">
          <div className="row">
            <div className="col-12 mb--50">
              <h3
                className="title"
                data-sal-delay="150"
                data-sal="slide-up"
                data-sal-duration="800"
              >
                How to contribute to the Black History Dao
              </h3>
            </div>
          </div>
          <div className="row g-5">
            <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div
                data-sal="slide-up"
                data-sal-delay="150"
                data-sal-duration="800"
                className="rn-service-one color-shape-7"
              >
                <div className="inner">
                  <div className="icon">
                    <img
                      src="/images/icons/shape-7.png"
                      alt="Set up your wallet"
                    />
                  </div>
                  <div className="subtitle">Step-01</div>
                  <div className="content">
                    <h4 className="title">
                      <a href="/connect">Set up your wallet</a>
                    </h4>
                    <p className="description">
                      connect your wallet to get started{" "}
                    </p>
                    <a href="/connect" className="read-more-button">
                      <i className="feather-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <a href="/connect" className="over-link">
                  <span className="visually-hidden">
                    Click here to read more
                  </span>
                </a>
              </div>
            </div>
            <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div
                data-sal="slide-up"
                data-sal-delay="150"
                data-sal-duration="800"
                className="rn-service-one color-shape-7"
              >
                <div className="inner">
                  <div className="icon">
                    <img
                      src="/images/icons/shape-1.png"
                      alt="Upload your artifact "
                    />
                  </div>
                  <div className="subtitle">Step-02</div>
                  <div className="content">
                    <h4 className="title">
                      <a href="/collection">Upload your artifact </a>
                    </h4>
                    <p className="description">
                      submit your artifacts propose to the Dao for verfication
                    </p>
                    <a href="/collection" className="read-more-button">
                      <i className="feather-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <a href="/collection" className="over-link">
                  <span className="visually-hidden">
                    Click here to read more
                  </span>
                </a>
              </div>
            </div>
            <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div
                data-sal="slide-up"
                data-sal-delay="150"
                data-sal-duration="800"
                className="rn-service-one color-shape-7"
              >
                <div className="inner">
                  <div className="icon">
                    <img src="/images/icons/shape-5.png" alt="Review Period" />
                  </div>
                  <div className="subtitle">Step-03</div>
                  <div className="content">
                    <h4 className="title">
                      <a href="/connect">Review Period</a>
                    </h4>
                    <p className="description">
                      Your artifacts will remain on hold while our expert team
                      of historians verfiy the legitamacy of your historic
                      artifact
                    </p>
                    <a href="/connect" className="read-more-button">
                      <i className="feather-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <a href="/connect" className="over-link">
                  <span className="visually-hidden">
                    Click here to read more
                  </span>
                </a>
              </div>
            </div>
            <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div
                data-sal="slide-up"
                data-sal-delay="150"
                data-sal-duration="800"
                className="rn-service-one color-shape-7"
              >
                <div className="inner">
                  <div className="icon">
                    <img
                      src="/images/icons/shape-6.png"
                      alt="Verified submissions"
                    />
                  </div>
                  <div className="subtitle">Step-04</div>
                  <div className="content">
                    <h4 className="title">
                      <a href="/creator">Verified submissions</a>
                    </h4>
                    <p className="description">
                      When your artifact is reviewed and verfied it will be
                      submitting onto the Black history Dao archive and the
                      contributer will recieve points in scale of there
                      contribution
                    </p>
                    <a href="/creator" className="read-more-button">
                      <i className="feather-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <a href="/creator" className="over-link">
                  <span className="visually-hidden">
                    Click here to read more
                  </span>
                </a>
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
                className="title mb--0"
                data-sal-delay="150"
                data-sal="slide-up"
                data-sal-duration="800"
              >
                Top Historic Collections
              </h3>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt_mobile--15">
              <div
                className="view-more-btn text-start text-sm-end"
                data-sal-delay="150"
                data-sal="slide-up"
                data-sal-duration="800"
              >
                <a href="/collection" className="btn-transparent">
                  VIEW ALL<i className="feather feather-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="row g-5">
            <div
              data-sal="slide-up"
              data-sal-delay="150"
              data-sal-duration="800"
              className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12"
            >
              <a href="/collection" className="rn-collection-inner-one">
                <div className="collection-wrapper">
                  <div className="collection-big-thumbnail">
                    <span
                      style={{
                        boxSizing: "borderBox",
                        display: " inline-block",
                        overflow: " hidden",
                        width: " initial",
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
                          width: " initial",
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
                            width: " initial",
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
                        srcSet="/_next/image?url=%2Fimages%2Fcollection%2Fmaxresdefault.jpg&amp;w=640&amp;q=75 1x, /_next/image?url=%2Fimages%2Fcollection%2Fmaxresdefault.jpg&amp;w=1080&amp;q=75 2x"
                        src="/_next/image?url=%2Fimages%2Fcollection%2Fmaxresdefault.jpg&amp;w=1080&amp;q=75"
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
                  <div className="collenction-small-thumbnail">
                    <div>
                      <span
                        style={{
                          boxSizing: "borderBox",
                          display: " inline-block",
                          overflow: " hidden",
                          width: " initial",
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
                            width: " initial",
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
                              width: " initial",
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
                          srcSet="/_next/image?url=%2Fimages%2Fcollection%2Fk49zswc29d.jpg&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fcollection%2Fk49zswc29d.jpg&amp;w=384&amp;q=75 2x"
                          src="/_next/image?url=%2Fimages%2Fcollection%2Fk49zswc29d.jpg&amp;w=384&amp;q=75"
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
                          display: " inline-block",
                          overflow: " hidden",
                          width: " initial",
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
                            width: " initial",
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
                              width: " initial",
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
                          srcSet="/_next/image?url=%2Fimages%2Fcollection%2F05_17.3_1954.jpg&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fcollection%2F05_17.3_1954.jpg&amp;w=384&amp;q=75 2x"
                          src="/_next/image?url=%2Fimages%2Fcollection%2F05_17.3_1954.jpg&amp;w=384&amp;q=75"
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
                          display: " inline-block",
                          overflow: " hidden",
                          width: " initial",
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
                            width: " initial",
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
                              width: " initial",
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
                          srcSet="/_next/image?url=%2Fimages%2Fcollection%2Fcollection-sm-03.jpg&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fcollection%2Fcollection-sm-03.jpg&amp;w=384&amp;q=75 2x"
                          src="/_next/image?url=%2Fimages%2Fcollection%2Fcollection-sm-03.jpg&amp;w=384&amp;q=75"
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
              className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12"
            >
              <a href="/collection" className="rn-collection-inner-one">
                <div className="collection-wrapper">
                  <div className="collection-big-thumbnail">
                    <span
                      style={{
                        boxSizing: "borderBox",
                        display: " inline-block",
                        overflow: " hidden",
                        width: " initial",
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
                          width: " initial",
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
                            width: " initial",
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
                        srcSet="/_next/image?url=%2Fimages%2Fcollection%2F3jimc0315m.jpg&amp;w=640&amp;q=75 1x, /_next/image?url=%2Fimages%2Fcollection%2F3jimc0315m.jpg&amp;w=1080&amp;q=75 2x"
                        src="/_next/image?url=%2Fimages%2Fcollection%2F3jimc0315m.jpg&amp;w=1080&amp;q=75"
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
                  <div className="collenction-small-thumbnail">
                    <div>
                      <span
                        style={{
                          boxSizing: "borderBox",
                          display: " inline-block",
                          overflow: " hidden",
                          width: " initial",
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
                            width: " initial",
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
                              width: " initial",
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
                          srcSet="/_next/image?url=%2Fimages%2Fcollection%2Fmaxresdefault-2.jpg&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fcollection%2Fmaxresdefault-2.jpg&amp;w=384&amp;q=75 2x"
                          src="/_next/image?url=%2Fimages%2Fcollection%2Fmaxresdefault-2.jpg&amp;w=384&amp;q=75"
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
                          display: " inline-block",
                          overflow: " hidden",
                          width: " initial",
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
                            width: " initial",
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
                              width: " initial",
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
                          srcSet="/_next/image?url=%2Fimages%2Fcollection%2Fimages-2.jpeg&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fcollection%2Fimages-2.jpeg&amp;w=384&amp;q=75 2x"
                          src="/_next/image?url=%2Fimages%2Fcollection%2Fimages-2.jpeg&amp;w=384&amp;q=75"
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
                          display: " inline-block",
                          overflow: " hidden",
                          width: " initial",
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
                            width: " initial",
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
                              width: " initial",
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
                          srcSet="/_next/image?url=%2Fimages%2Fcollection%2FDde1vxiV0AEQfOV.jpg&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fcollection%2FDde1vxiV0AEQfOV.jpg&amp;w=384&amp;q=75 2x"
                          src="/_next/image?url=%2Fimages%2Fcollection%2FDde1vxiV0AEQfOV.jpg&amp;w=384&amp;q=75"
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
                  </div>
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
              className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12"
            >
              <a href="/collection" className="rn-collection-inner-one">
                <div className="collection-wrapper">
                  <div className="collection-big-thumbnail">
                    <span
                      style={{
                        boxSizing: "borderBox",
                        display: " inline-block",
                        overflow: " hidden",
                        width: " initial",
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
                          width: " initial",
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
                            width: " initial",
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
                        srcSet="/_next/image?url=%2Fimages%2Fcollection%2Fblm1.jpg&amp;w=640&amp;q=75 1x, /_next/image?url=%2Fimages%2Fcollection%2Fblm1.jpg&amp;w=1080&amp;q=75 2x"
                        src="/_next/image?url=%2Fimages%2Fcollection%2Fblm1.jpg&amp;w=1080&amp;q=75"
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
                  <div className="collenction-small-thumbnail">
                    <div>
                      <span
                        style={{
                          boxSizing: "borderBox",
                          display: " inline-block",
                          overflow: " hidden",
                          width: " initial",
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
                            width: " initial",
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
                              width: " initial",
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
                          srcSet="/_next/image?url=%2Fimages%2Fcollection%2Fblm2.jpg&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fcollection%2Fblm2.jpg&amp;w=384&amp;q=75 2x"
                          src="/_next/image?url=%2Fimages%2Fcollection%2Fblm2.jpg&amp;w=384&amp;q=75"
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
                          display: " inline-block",
                          overflow: " hidden",
                          width: " initial",
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
                            width: " initial",
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
                              width: " initial",
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
                          srcSet="/_next/image?url=%2Fimages%2Fcollection%2Fblm3.jfif&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fcollection%2Fblm3.jfif&amp;w=384&amp;q=75 2x"
                          src="/_next/image?url=%2Fimages%2Fcollection%2Fblm3.jfif&amp;w=384&amp;q=75"
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
                          display: " inline-block",
                          overflow: " hidden",
                          width: " initial",
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
                            width: " initial",
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
                              width: " initial",
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
                          srcSet="/_next/image?url=%2Fimages%2Fcollection%2Fblm4.jpg&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fcollection%2Fblm4.jpg&amp;w=384&amp;q=75 2x"
                          src="/_next/image?url=%2Fimages%2Fcollection%2Fblm4.jpg&amp;w=384&amp;q=75"
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
                  </div>
                  <div className="collection-deg">
                    <h6 className="title">Black Lives Matter -06/20</h6>
                    <span className="items">15 items</span>
                  </div>
                </div>
              </a>
            </div>

            {/*je me suis arrete ici  ....................
            
        
        
                        *******************************************************/}
            <div
              data-sal="slide-up"
              data-sal-delay="150"
              data-sal-duration="800"
              className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12"
            >
              <a href="/collection" className="rn-collection-inner-one">
                <div className="collection-wrapper">
                  <div className="collection-big-thumbnail">
                    <span
                      style={{
                        boxSizing: "borderBox",
                        display: " inline-block",
                        overflow: " hidden",
                        width: " initial",
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
                          width: " initial",
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
                            width: " initial",
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
                        srcSet="/_next/image?url=%2Fimages%2Fcollection%2Ftill1.jpg&amp;w=640&amp;q=75 1x, /_next/image?url=%2Fimages%2Fcollection%2Ftill1.jpg&amp;w=1080&amp;q=75 2x"
                        src="/_next/image?url=%2Fimages%2Fcollection%2Ftill1.jpg&amp;w=1080&amp;q=75"
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
                  <div className="collenction-small-thumbnail">
                    <div>
                      <span
                        style={{
                          boxSizing: "borderBox",
                          display: " inline-block",
                          overflow: " hidden",
                          width: " initial",
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
                            width: " initial",
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
                              width: " initial",
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
                          srcSet="/_next/image?url=%2Fimages%2Fcollection%2Ftill4.jpg&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fcollection%2Ftill4.jpg&amp;w=384&amp;q=75 2x"
                          src="/_next/image?url=%2Fimages%2Fcollection%2Ftill4.jpg&amp;w=384&amp;q=75"
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
                          display: " inline-block",
                          overflow: " hidden",
                          width: " initial",
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
                            width: " initial",
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
                              width: " initial",
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
                          srcSet="/_next/image?url=%2Fimages%2Fcollection%2Ftill3.webp&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fcollection%2Ftill3.webp&amp;w=384&amp;q=75 2x"
                          src="/_next/image?url=%2Fimages%2Fcollection%2Ftill3.webp&amp;w=384&amp;q=75"
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
                          display: " inline-block",
                          overflow: " hidden",
                          width: " initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: "0px",
                          margin: "0px",
                          padding: "0px",
                          position: "relative",
                          maxWidth: " 100%",
                        }}
                      ></span>
                      style=
                      {{
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
                      /&gt;
                      <img
                        alt=""
                        aria-hidden="true"
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27164%27%20height=%27110%27/%3e"
                        style={{
                          display: "block",
                          maxWidth: " 100%",
                          width: " initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: "0px",
                          margin: "0px",
                          padding: "0px",
                        }}
                      />
                      <span>
                        <img
                          alt="Nft_Profile"
                          srcSet="/_next/image?url=%2Fimages%2Fcollection%2Ftill2.webp&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fcollection%2Ftill2.webp&amp;w=384&amp;q=75 2x"
                          src="/_next/image?url=%2Fimages%2Fcollection%2Ftill2.webp&amp;w=384&amp;q=75"
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
    </div>
  );
};

export default HowToContribute;
sal();
