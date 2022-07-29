import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/#/">
        <img src="./src/images/cart.png" className="img-store" alt="" /> Store App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/#/">{/*<i className='bx bx-box icon-nav' style={{color:'#ffffff'}} ></i>*/}Home</Nav.Link>
            <Nav.Link href="/#/purchases">{/*<i className='bx bxs-cart icon-nav' style={{color:'#ffffff'}}></i>*/}Purchases</Nav.Link>
            <Nav.Link href="/#/login">{/*<i className='bx bxs-user icon-nav' style={{color:'#ffffff'}} ></i>*/}Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
  
};

export default NavBar;
