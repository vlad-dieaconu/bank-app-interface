import React, { useState } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.css";


const NavBar = () => {

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container style={{ marginTop: "0px", margin: "auto", maxWidth: "1720px" }}>
        <Navbar.Brand href="home">
          MyBANK
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" style={{ justifyContent: "space-between" }}>
          <Nav className="me-auto">
            <Nav.Link href="register">Register</Nav.Link>
          </Nav>

          <Nav style={{ marginRight: "0px !important" }}>

            <Navbar.Text style={{ color: "white" }}>
            
              Logged in as {JSON.parse(localStorage.getItem("client") || "{}").nume}
            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
