import React from "react";
import "./Create.css";
import "mdbreact/dist/css/mdb.css";
import { MDBFile } from "mdb-react-ui-kit";
import { Button } from "@mui/material";

import Box from "@mui/material/Box";

const Create = () => {
  return (
    <div>
      <div
        class="container-fluid"
        style={{ backgroundColor: "rgb(46, 43, 43)" }}
      >
        <div class="row">
          <div class="col-lg-6" fullWidth style={{ color: "red" }}>
            <MDBFile
              label="Choose a Cover/NFT
                    
                      PNG, GIF, WEBP, MP4 or MP3. Max 1Gb."
              id="customFile"
            />
          </div>
          <div
            className="col-lg-6"
            fullWidth
            style={{ background: "black", color: "yellow" }}
          >
            <Box component="form">
              <label for="name" className="form-label">
                Title
              </label>
              <textarea
                style={{
                  background: "white",
                  color: "black",
                  borderRadius: "10px",
                }}
                id="name"
                rows="1"
                cols="50"
                placeholder="Format: `Name_Date_Historian-Initials.Org`"
                name="Title"
              ></textarea>
              <label for="Discription" className="form-label">
                Description
              </label>
              <textarea
                id="discription"
                rows="4"
                cols="50"
                style={{ backgroundColor: "darkgrey", borderRadius: "10px" }}
                placeholder="e.g. “Martin Luther King Jr. was a social activist and Baptist minister who played a key role in the American civil rights movement from the mid-1950s until his assassination in 1968.”"
                name="discription"
              ></textarea>
              <div className="col-md-12 col-xl-8 mt_lg--15 mt_md--15 mt_sm--15">
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
            </Box>
          </div>
        </div>
      </div>

      {/*<div style={{ color: "black" }} className="create-area rn-section-gapTop">
        <form action="#">
          
               
                        >
                         
              <div className="mt--100 mt_sm--30 mt_md--30 d-block d-lg-none">
                <h5> Note: </h5>
                <span>
                  All Products are subject to<strong>community approval</strong>{" "}
                </span>{" "}
                <br />
                <span>
                  {" "}
                  You will receive :<strong>BLACK HISTORY DAO</strong>
                </span>
              </div>
            </div>
          </div>
        </form>
      </div>*/}
    </div>
  );
};

export default Create;
