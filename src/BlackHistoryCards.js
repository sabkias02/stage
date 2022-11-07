import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardGroup from "react-bootstrap/CardGroup";
import { Row, Col, Stack } from "react-bootstrap";

import "./BlackHistoryCards.css";
function BlackHistoryCards() {
  return (
    <div>
      <CardGroup className="discover">
        <Card className="dao1 ">
          <Card.Body className="card1">
            <Card.Text
              style={{
                marginTop: "30px",
                marginBottom: "30px",
                wordSpacing: "10px",
                fontSize: "50px",
              }}
            >
              Discover Digital
              <br /> Pieces Of Black
              <br /> History In The Metaverse
            </Card.Text>
            <div className="button-group">
              <Button
                href="/"
                className="btn btn-large btn-primary sal-animate btn-space"
                data-sal-delay="400"
                data-sal="slide-up"
                data-sal-duration="800"
              >
                Become a verifier
              </Button>

              <Button
                href="/"
                className="btn btn-large btn-secondary sal-animate btn-space"
                data-sal-delay="500"
                data-sal="slide-up"
                data-sal-duration="800"
              >
                Create Proposal
              </Button>
            </div>
          </Card.Body>
        </Card>
        <Card className="dao2 ">
          <Card.Img src={require("./images/slider-1.jpeg")} />
        </Card>
      </CardGroup>
      <div class="container">
        <div class="row mb--50 align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-6 col-12">
            <h1
              className="title mb--0 sal-animate"
              color="light"
              data-sal-delay="150"
              data-sal="slide-up"
              data-sal-duration="800"
              style={{
                marginTop: "30px",
                marginBottom: "30px",
                color: "white",
              }}
            >
              Top Historic Collections
            </h1>
          </div>
        </div>
        <div clasName="col-lg-6 col-md-6 col-sm-6 col-12 mt_mobile--15">
          <div
            className="view-more-btn text-start text-sm-end sal-animate"
            data-sal-delay="150"
            data-sal="slide-up"
            data-sal-duration="800"
          >
            <a href="/collection" className="btn-transparent">
              VIEW ALL
            </a>
          </div>
        </div>
        <CardGroup className="list  d-flex">
          <Row sm={1} md={3} lg={4} className="g-4">
            <Col className="card-columns">
              <Card>
                <img
                  src={require("./images/bigJimCrow.webp")}
                  className="card-img-top"
                  alt=""
                />
                <Card.Body className="card1">
                  <Stack
                    direction="horizontal"
                    className="lazyload justify-content-between mb-2"
                  >
                    <img
                      style={{
                        width: "4rem",
                        height: "4vw ",
                        borderRadius: "10px",
                      }}
                      src={require("./images/firstJimcrow.jpeg")}
                      alt="img-1"
                    />
                    <img
                      style={{
                        width: "4rem",
                        height: "4vw ",
                        borderRadius: "10px",
                      }}
                      src={require("./images/secondJimCrow.jpeg")}
                      alt="img-2"
                    />
                    <img
                      style={{
                        width: "4rem",
                        height: "4vw ",
                        borderRadius: "10px",
                      }}
                      src={require("./images/thirdJimCrew.jpeg")}
                      alt="img-3"
                    />
                  </Stack>
                  <Card.Title>
                    Jim Crow:Equal <br />
                    Opportunity<span className="items">20 items</span>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>

            <Col className="card-columns">
              <Card>
                <img
                  src={require("./images/bigSeparate.webp")}
                  className="card-img-top"
                  alt=""
                />
                <Card.Body className="card1">
                  <Stack
                    direction="horizontal"
                    className="lazyload justify-content-between mb-3"
                  >
                    <img
                      style={{
                        width: "4rem",
                        height: "4vw ",
                        borderRadius: "10px",
                      }}
                      src={require("./images/firstSeparate.webp")}
                      alt="img-1"
                    />
                    <img
                      style={{
                        width: "4rem",
                        height: "4vw ",
                        borderRadius: "10px",
                      }}
                      src={require("./images/second-separate.webp")}
                      alt="img-2"
                    />
                    <img
                      style={{
                        width: "4rem",
                        height: "4vw ",
                        borderRadius: "10px",
                      }}
                      src={require("./images/third separate.webp")}
                      alt="img-3"
                    />
                  </Stack>
                  <Card.Title>
                    Separate but Equal<span className="items">20 items</span>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col className="card-columns">
              <Card>
                <img
                  src={require("./images/blacklives.webp")}
                  className="card-img-top"
                  alt=""
                />
                <Card.Body className="card1">
                  <Stack
                    direction="horizontal"
                    className="lazyload justify-content-between mb-3"
                  >
                    <img
                      style={{
                        width: "4rem",
                        height: "4vw ",
                        borderRadius: "10px",
                      }}
                      src={require("./images/firstblacklivesMatter.webp")}
                      alt="img-1"
                    />
                    <img
                      style={{
                        width: "4rem",
                        height: "4vw ",
                        borderRadius: "10px",
                      }}
                      src={require("./images/secondBlackLivesMatter.webp")}
                      alt="img-2"
                    />
                    <img
                      style={{
                        width: "4rem",
                        height: "4vw ",
                        borderRadius: "10px",
                      }}
                      src={require("./images/thirdblacklivesMatter.webp")}
                      alt="img-3"
                    />
                  </Stack>
                  <Card.Title>
                    Black Lives Matter <span className="items">15 items</span>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col className="card-columns">
              <Card>
                <img
                  src={require("./images/till1.webp")}
                  className="card-img-top"
                  alt=""
                />
                <Card.Body className="card1">
                  <Stack
                    direction="horizontal"
                    className="lazyload justify-content-between mb-3"
                  >
                    <img
                      style={{
                        width: "4rem",
                        height: "4vw ",
                        borderRadius: "10px",
                      }}
                      src={require("./images/till2.webp")}
                      alt="img-1"
                    />
                    <img
                      style={{
                        width: "4rem",
                        height: "4vw ",
                        borderRadius: "10px",
                      }}
                      src={require("./images/till3.webp")}
                      alt="img-2"
                    />
                    <img
                      style={{
                        width: "4rem",
                        height: "4vw ",
                        borderRadius: "10px",
                      }}
                      src={require("./images/till4.webp")}
                      alt="img-3"
                    />
                  </Stack>
                  <Card.Title>
                    Emett Till<span className="items">27 items</span>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </CardGroup>
      </div>
    </div>
  );
}

export default BlackHistoryCards;
