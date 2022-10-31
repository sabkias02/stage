import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardGroup from "react-bootstrap/CardGroup";

import Navbar from "./Headers/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <CardGroup>
        <Card>
          <Card.Body className="card1">
            <Card.Text style={{ fontSize: "80px" }}>
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
                href="/create"
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
        <Card>
          <Card.Img src={require("./slider-1.jpeg")} />
        </Card>
      </CardGroup>
    </div>
  );
}

export default App;
