import React from "react";
import { Navbar, Container } from 'react-bootstrap'

const NavbarComponent = () => {
  return (
    <Navbar variant="dark" expand="lg">
      <Container center>
      <Navbar.Brand href="#home"><strong>Rumah Makan Rose</strong></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
