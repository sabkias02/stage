import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

function NavScroll() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" className="sticky">
      <Container fluid className="Container">
        <Navbar.Brand href="#">
          <img src={require("./logo-white.png")} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to="/Home" style={{ paddingRight: "20px" }}>
              Home
            </Link>
            <Link to="Create">Create proposal</Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search Here"
              className="me-0"
              aria-label="Search"
              style={{
                backgroundColor: "rgb(82, 79, 79)",
                borderStyle: "none",
              }}
            />
            <button
              className="fa fa-search "
              style={{
                backgroundColor: "rgb(82, 79, 79)",

                color: "white",
              }}
            ></button>
          </Form>
          <div
            className="icon-box"
            style={{
              borderRadius: "10px",

              pointerEvents: "auto",
            }}
          >
            <button
              name=" btn btn-lg "
              type="button"
              style={{
                backgroundColor: "rgb(63, 66, 87)",
                width: "150px",
                borderRadius: "10px",
                height: "40px",
                color: "white",
              }}
            >
              Wallet connect
            </button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScroll;
