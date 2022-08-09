import React, { useState } from "react";
import { Container, Nav, Navbar, Offcanvas, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NavBar = () => {

  const navigate = useNavigate()

  const logout = () => {
    localStorage.setItem('token', "")
    navigate("/login")
  }

  const token = localStorage.getItem("token");

  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/#/">
          <img src="./src/images/cart.png" className="img-store" alt="" /> Store
          App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/#/">
              {/*<i className='bx bx-box icon-nav' style={{color:'#ffffff'}} ></i>*/}
              Home
            </Nav.Link>
            <Nav.Link href="/#/purchases">
              {/*<i className='bx bxs-cart icon-nav' style={{color:'#ffffff'}}></i>*/}
              Purchases
            </Nav.Link>

            {
              token ? (
              <Nav.Link  onClick={logout}>
                Logout
              </Nav.Link>
              ) : (
                <Nav.Link href="/#/login">
                {/*<i className='bx bxs-user icon-nav' style={{color:'#ffffff'}} ></i>*/}
                Login
              </Nav.Link>
              )
            }


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
