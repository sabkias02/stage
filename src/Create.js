import React from "react";
import "./Create.css";
import "mdbreact/dist/css/mdb.css";
import { MDBFile } from "mdb-react-ui-kit";
import Box from "@mui/material/Box";

const Create = () => {
  return (
    <div>
      <div
        class="container-fluid"
        style={{ backgroundColor: "rgb(46, 43, 43)" }}
      >
        <div class="row">
          <div class="col-lg-6" fullWidth style={{}}>
            <div
              className="upload-area"
              style={{ border: "dashed", color: "red" }}
            >
              <div clasName="upload">
                <MDBFile
                  label="Choose a Cover/NFT
                    
                      PNG, GIF, WEBP, MP4 or MP3. Max 1Gb."
                  id="customFile"
                />
              </div>
            </div>
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
              <div className="btn-group">
                <button
                  className="btn btn-large btn-secondary btn-space "
                  type="submit"
                  data-btn="preview"
                  style={{
                    margin: "5px 15px 5px 35px ",
                    borderRadius: "10px",
                    maxHeight: " max-content",
                  }}
                >
                  <span>Preview</span>
                </button>{" "}
                <button
                  className="btn btn-large btn-primary btn-space  "
                  type="submit"
                  style={{
                    margin: "5px 35px 5px 15px ",
                    borderRadius: "10px",
                    maxHeight: " max-content",
                  }}
                >
                  <span>Make Proposal</span>
                </button>
              </div>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
