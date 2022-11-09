import React, { Component } from "react";
import "./Create.css";
import "mdbreact/dist/css/mdb.css";
import { MDBFile } from "mdb-react-ui-kit";
import Box from "@mui/material/Box";

class Create extends Component {
  state = {
    title: "",
    description: "",
  };

  handleChange = (e) => {
    this.setState({
      title: e.target.value,
      description: e.target.value,
    });
  };

  handleClick = (e) => {
    e.preventDefault();
    console.log(this.state.title);
    console.log(this.state.description);
  };
  render() {
    return (
      <div>
        <div
          className="container-fluid"
          style={{ backgroundColor: "rgb(46, 43, 43)" }}
        >
          <div className="row">
            <div className="col-lg-6" style={{ color: "yellow" }}>
              <div className="container ">
                <form>
                  <div className="mb-2">
                    <label
                      className="form-label"
                      htmlFor="name"
                      style={{ color: "yellow" }}
                    >
                      Name
                    </label>
                    <textarea
                      style={{
                        background: "white",
                        color: "black",
                        borderRadius: "10px",
                      }}
                      id="name"
                      rows="1"
                      cols="58"
                      placeholder="Your Name"
                      name="name"
                    ></textarea>
                  </div>
                  <div className="mb-2">
                    <label
                      className="form-label"
                      htmlFor="email"
                      style={{ color: "yellow" }}
                    >
                      Email
                    </label>
                    <textarea
                      style={{
                        background: "white",
                        color: "black",
                        borderRadius: "10px",
                      }}
                      id="name"
                      rows="1"
                      cols="58"
                      placeholder="Your Email"
                      name="email"
                    ></textarea>
                  </div>
                  <div className="mb-2">
                    <label
                      className="form-label"
                      htmlFor="Telnumber"
                      style={{ color: "yellow" }}
                    >
                      Phone Number
                    </label>
                    <textarea
                      style={{
                        background: "white",
                        color: "black",
                        borderRadius: "10px",
                      }}
                      id="name"
                      rows="1"
                      cols="58"
                      placeholder=" Your Phone Number"
                      name="phone number"
                    ></textarea>
                  </div>
                </form>
              </div>
              <div className="upload-formate " style={{ color: "yellow" }}>
                <strong>Upload Asset file</strong>

                <span> (Drag or choose a file to upload)</span>
              </div>
              <div className="upload-area" style={{ border: "dashed" }}>
                <div
                  className="upload"
                  style={{ color: "red", fontWeight: "Bold", fontSize: "20px" }}
                >
                  <MDBFile label="Choose a Cover/NFT" id="customFile" />
                </div>
                <span>PNG, GIF, WEBP, MP4 or MP3. Max 1Gb</span>
              </div>
            </div>
            <div
              className="col-lg-6"
              style={{ background: "black", color: "yellow" }}
            >
              <Box component="form" onClick={this.handleClick}>
                <label for="name" className="form-label mb-3">
                  Title
                </label>
                <textarea
                  onChange={this.handleChange}
                  style={{
                    background: "white",
                    color: "black",
                    borderRadius: "10px",
                  }}
                  id="title"
                  rows="1"
                  cols="58"
                  placeholder="Format: `Name_Date_Historian-Initials.Org`"
                  name="title"
                ></textarea>
                <label for="Description" className="form-label mb-3 mt-5">
                  Description
                </label>
                <textarea
                  onChange={this.handleChange}
                  id="description"
                  rows="6"
                  cols="58"
                  style={{ backgroundColor: "darkgrey", borderRadius: "10px" }}
                  placeholder="e.g. “Martin Luther King Jr. was a social activist and Baptist minister who played a key role in the American civil rights movement from the mid-1950s until his assassination in 1968.”"
                  name="description"
                ></textarea>
                <div className="btn-group">
                  <button
                    className="btn btn-large  btn-space  mt-5"
                    type="submit"
                    data-btn="preview"
                    style={{
                      margin: "5px 35px 5px 0px ",
                      borderRadius: "10px",
                      backgroundColor: "rgb(63, 66, 87)",
                    }}
                  >
                    <span>Preview</span>
                  </button>{" "}
                  <button
                    onClick={this.handleClick}
                    className="btn btn-large btn-primary btn-space  mt-5 "
                    type="submit"
                    style={{
                      borderRadius: "10px",
                      margin: "5px 0px 5px 0px ",
                      width: "320px",
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
  }
}
export default Create;
