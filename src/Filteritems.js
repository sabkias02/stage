import React from "react";
import "./Filteritems.css";
import Card from "react-bootstrap/Card";
import { SliderComponent } from "@syncfusion/ej2-react-inputs";

import CardGroup from "react-bootstrap/CardGroup";
import { Row, Col } from "react-bootstrap";

const Filteritems = () => {
  return (
    <>
      <section className="container">
        <div className="filtereditems">
          <form>
            <fieldset>
              <h5>Sort By</h5>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  checked
                />
                <label className=" form-check-label" or="flexRadioDefault2">
                  Newest
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Oldest
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Most Liked
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Least Liked
                </label>
              </div>
            </fieldset>
          </form>
          <form>
            <fieldset>
              <h5 className="widget-title">Language</h5>

              <div className="nuron-form-check">
                <input
                  type="checkbox"
                  name="level"
                  value="all"
                  id="lang-check1"
                />
                <label htmlFor="lang-check1">All Language</label>
              </div>
              <div className="nuron-form-check">
                <input
                  type="checkbox"
                  name="language"
                  id="lang-check-Russian"
                  value="Russian"
                />
                <label htmlFor="lang-check-Russian">Russian</label>
              </div>
              <div className="nuron-form-check">
                <input
                  type="checkbox"
                  name="language"
                  id="lang-check-Arabic"
                  value="Arabic"
                />
                <label htmlFor="lang-check-Arabic">Arabic</label>
              </div>
              <div className="nuron-form-check">
                <input
                  type="checkbox"
                  name="language"
                  id="lang-check-English"
                  value="English"
                />
                <label htmlFor="lang-check-English">English</label>
              </div>
            </fieldset>
          </form>

          <form>
            <fieldset>
              <h5>Eras</h5>
              <div>
                <input
                  type="checkbox"
                  id="coding"
                  name="interest"
                  value="coding"
                />
                <label htmlFor="coding">All Eras</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="Pre Jim Crow"
                  name="Pre Jim Crow"
                  value="Pre Jim Crow"
                />
                <label htmlFor="Pre Jim Crow">Pre Jim Crow</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="Civil rights movement"
                  name="Civil rights movement"
                  value="Civil rights movement"
                />
                <label htmlFor="Civil rights movement">
                  Civil rights movement
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="Jim Crow"
                  name="Jim Crow"
                  value="Jim Crow"
                />
                <label htmlFor="Jim Crow">Jim Crow</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="Black Lives Matter"
                  name="Black Lives Matter"
                  value="Black Lives Matter"
                />
                <label htmlFor="Black Lives Matter">Black Lives Matter</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="Abolitionism"
                  name="Abolitionism"
                  value="Abolitionism"
                />
                <label htmlFor="Abolitionism">Abolitionism</label>
              </div>
            </fieldset>
          </form>
          <form>
            <fieldset>
              <h5>Century</h5>
              <div>
                <input
                  type="checkbox"
                  id="century"
                  name="century"
                  value="century"
                />
                <label htmlFor="century">2000'S (4)</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="century1"
                  name="century1"
                  value="century1"
                />
                <label htmlFor="century1">1800'S (1)</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="century2"
                  name="century2"
                  value="century2"
                />
                <label htmlFor="century2">1900'S (1)</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="century3"
                  name="century3"
                  value="century3"
                />
                <label htmlFor="century3">1600'S (1)</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="century4r"
                  name="century4"
                  value="century4"
                />
                <label htmlFor="century4">1700'S (1)</label>
              </div>
            </fieldset>
          </form>
          <form>
            <fieldset>
              <h5>Sort By Price</h5>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  checked
                />
                <label className=" form-check-label" or="flexRadioDefault2">
                  Price : Low to High
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Price:High to Low
                </label>
              </div>
            </fieldset>
          </form>
          <form>
            <fieldset>
              <h5 className="widget-title">Filter By Rating</h5>

              <div className="nuron-form-check">
                <input
                  type="checkbox"
                  name="Filter By Rating"
                  value="5stars"
                  id="5stars"
                />
                <label htmlFor="star-check5">
                  <span className="score">
                    <div className="score-wrap">
                      <span className="stars-active" style={{ width: "100%" }}>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                      </span>
                      <span className="stars-inactive">
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                      </span>
                    </div>
                  </span>
                </label>
              </div>
              <div className="nuron-form-check">
                <input
                  type="checkbox"
                  name="filter by rating"
                  id="4stars"
                  value="4stars"
                />
                <label htmlFor="star-check4">
                  <span className="score">
                    <div className="score-wrap">
                      <span className="stars-active" style={{ width: "80%" }}>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                      </span>
                      <span className="stars-inactive">
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                      </span>
                    </div>
                  </span>
                </label>
              </div>

              <div className="nuron-form-check">
                <input
                  type="checkbox"
                  name="filter by rating"
                  id="3stars"
                  value="3stars"
                />
                <label htmlFor="star-check3">
                  <span className="score">
                    <div className="score-wrap">
                      <span className="stars-active" style={{ width: "60%" }}>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                      </span>
                      <span className="stars-inactive">
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                      </span>
                    </div>
                  </span>
                </label>
              </div>
              <div className="nuron-form-check">
                <input
                  type="checkbox"
                  name="filter by rating"
                  id="2stars"
                  value="2stars"
                />
                <label htmlFor="star-check2">
                  <span className="score">
                    <div className="score-wrap">
                      <span className="stars-active" style={{ width: "40%" }}>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                      </span>
                      <span className="stars-inactive">
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                      </span>
                    </div>
                  </span>
                </label>
              </div>
              <div className="nuron-form-check">
                <input
                  type="checkbox"
                  name="filter by rating"
                  id="1stars"
                  value="1stars"
                />
                <label htmlFor="star-check1">
                  <span className="score">
                    <div className="score-wrap">
                      <span className="stars-active" style={{ width: "20%" }}>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                      </span>
                      <span className="stars-inactive">
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                      </span>
                    </div>
                  </span>
                </label>
              </div>
            </fieldset>
          </form>
          <form>
            <fieldset>
              <h5 className="widget-title">Filter By Price</h5>

              <div className="sliderwrap">
                <label className="labeltext">Default Slider</label>
                {/* Initialize Slider component */}
                <SliderComponent value={30} />
              </div>
            </fieldset>
          </form>
        </div>
        {/******** */}
        <div className="proposal">
          <CardGroup className="list1 d-flex">
            <Row sm={1} md={2} lg={3} className="g-4">
              <Col className="card-columns">
                <Card>
                  <Card.Body className="card1">
                    <img
                      src={require("./images/proposal1.webp")}
                      className="card-img-top"
                      alt=""
                    />

                    <Card.Title>
                      <span>6+ Places Bit ... </span>
                      <br />
                      <h6>BHD-PROPOSAL@ID</h6>
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="card-columns">
                <Card>
                  <Card.Body className="card1">
                    <img
                      src={require("./images/till3-1.webp")}
                      className="card-img-top"
                      alt=""
                    />

                    <Card.Title>
                      <span>6+ Places Bit ... </span>
                      <br />
                      <h6>BHD-PROPOSAL@ID</h6>
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>

              <Col className="card-columns">
                <Card>
                  <Card.Body className="card1">
                    <img
                      src={require("./images/proposal4.webp")}
                      className="card-img-top"
                      alt=""
                    />

                    <Card.Title>
                      <span>6+ Places Bit ... </span>
                      <br />
                      <h6>BHD-PROPOSAL@ID</h6>
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>

              <Col className="card-columns">
                <Card>
                  <Card.Body className="card1">
                    <img
                      src={require("./images/proposal9.webp")}
                      className="card-img-top"
                      alt=""
                    />

                    <Card.Title>
                      <span>6+ Places Bit ... </span>
                      <br />
                      <h6>BHD-PROPOSAL@ID</h6>
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </CardGroup>
        </div>
      </section>
    </>
  );
};

export default Filteritems;
