import React from "react";
import * as Icon from "react-feather";

const createNewProposal = () => {
  return (
    <div className="create">
      <main id="main-content">
        <div className="rn-breadcrumb-inner ptb--30">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 col-12">
                <h5 className="pageTitle text-center text-md-start">
                  Create New Proposal
                </h5>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <ul className="breadcrumb-list">
                  <li className="item">
                    <a href="/">Home</a>
                  </li>
                  <li className="separator">
                    <Icon.ChevronRight />
                  </li>
                  <li className="item current">Create New Proposal</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          className="create-area rn-section-gapTop"
          style={{ color: "black" }}
        >
          <form action="#">
            <div className="container">
              <div className="row g-5" style={{ color: "red" }}>
                <div className="col-lg-3 offset-1 ml_md--0 ml_sm--0">
                  <div className="upload-area">
                    <div className="upload-formate mb--20">
                      <h6 className="title">Upload Asset file</h6>
                      <p className="formate">Drag or choose a file to upload</p>
                    </div>
                    <div className="brows-file-wrapper">
                      <input
                        name="file"
                        id="file"
                        type="file"
                        className="inputfile"
                        data-multiple-caption="{count} files selected"
                        multiple=""
                      />
                      <label htmlFor="file" title="No File Choosen">
                        <Icon.Upload />
                        <span className="text-center">Choose a Cover/NFT</span>
                        <p className="text-center mt--10">
                          PNG, GIF, WEBP, MP4 or MP3. <br /> Max 1Gb.
                        </p>
                      </label>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-7"
                  style={{ background: "none", color: "yellow" }}
                >
                  <div
                    className="form-wrapper-one"
                    style={{ background: "black", color: "yellow" }}
                  >
                    <div className="row">
                      <div className="col-md-12">
                        <div className="input-box pb--20">
                          <label htmlFor="name" className="form-label">
                            Title
                          </label>
                          <input
                            id="name"
                            placeholder="Format: `Name_Date_Historian-Initials.Org`"
                            name="Title"
                            style={{ background: "white", color: "black" }}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="input-box pb--20">
                          <label htmlFor="Discription" className="form-label">
                            Description
                          </label>
                          <textarea
                            id="discription"
                            rows="3"
                            placeholder="e.g. “Martin Luther King Jr. was a social activist and Baptist minister who played a key role in the American civil rights movement from the mid-1950s until his assassination in 1968.”"
                            name="discription"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-md-12 col-xl-4">
                        <div className="input-box">
                          <button
                            className="btn btn-large btn-primary-alta w-100 d-block"
                            type="submit"
                            data-btn="preview"
                          >
                            <span>Preview</span>
                          </button>
                        </div>
                      </div>
                      <div className="col-md-12 col-xl-8 mt_lg--15 mt_md--15 mt_sm--15">
                        <div className="input-box">
                          <button
                            className="btn btn-large btn-primary w-100 d-block"
                            type="submit"
                          >
                            <span>Make Proposal</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt--100 mt_sm--30 mt_md--30 d-block d-lg-none">
                  <h5> Note: </h5>
                  <span>
                    {" "}
                    All Products are subject to{" "}
                    <strong>community approval</strong>{" "}
                  </span>
                  <br />
                  <span>
                    {" "}
                    You will receive : <strong>BLACK HISTORY DAO</strong>
                  </span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default createNewProposal;
