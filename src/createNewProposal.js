import React from "react";

const createNewProposal = () => {
  return (
    <div>
      <main id="main-content">
        <div class="rn-breadcrumb-inner ptb--30">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6 col-md-6 col-12">
                <h5 class="pageTitle text-center text-md-start">
                  Create New Proposal
                </h5>
              </div>
              <div class="col-lg-6 col-md-6 col-12">
                <ul class="breadcrumb-list">
                  <li class="item">
                    <a href="/">Home</a>
                  </li>
                  <li class="separator">
                    <i class="feather-chevron-right"></i>
                  </li>
                  <li class="item current">Create New Proposal</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="create-area rn-section-gapTop" style="color: black;">
          <form action="#">
            <div class="container">
              <div class="row g-5" style="color: red;">
                <div class="col-lg-3 offset-1 ml_md--0 ml_sm--0">
                  <div class="upload-area">
                    <div class="upload-formate mb--20">
                      <h6 class="title">Upload Asset file</h6>
                      <p class="formate">Drag or choose a file to upload</p>
                    </div>
                    <div class="brows-file-wrapper">
                      <input
                        name="file"
                        id="file"
                        type="file"
                        class="inputfile"
                        data-multiple-caption="{count} files selected"
                        multiple=""
                      />
                      <label for="file" title="No File Choosen">
                        <i class="feather-upload"></i>
                        <span class="text-center">Choose a Cover/NFT</span>
                        <p class="text-center mt--10">
                          PNG, GIF, WEBP, MP4 or MP3. <br /> Max 1Gb.
                        </p>
                      </label>
                    </div>
                  </div>
                </div>
                <div class="col-lg-7" style="background: none; color: yellow;">
                  <div
                    class="form-wrapper-one"
                    style="background: black; color: yellow;"
                  >
                    <div class="row">
                      <div class="col-md-12">
                        <div class="input-box pb--20">
                          <label for="name" class="form-label">
                            Title
                          </label>
                          <input
                            id="name"
                            placeholder="Format: `Name_Date_Historian-Initials.Org`"
                            name="Title"
                            style="background: white; color: black;"
                          />
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="input-box pb--20">
                          <label for="Discription" class="form-label">
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
                      <div class="col-md-12 col-xl-4">
                        <div class="input-box">
                          <button
                            class="btn btn-large btn-primary-alta w-100 d-block"
                            type="submit"
                            data-btn="preview"
                          >
                            <span>Preview</span>
                          </button>
                        </div>
                      </div>
                      <div class="col-md-12 col-xl-8 mt_lg--15 mt_md--15 mt_sm--15">
                        <div class="input-box">
                          <button
                            class="btn btn-large btn-primary w-100 d-block"
                            type="submit"
                          >
                            <span>Make Proposal</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mt--100 mt_sm--30 mt_md--30 d-block d-lg-none">
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
