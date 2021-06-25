import React from "react";
import "../styles/Navbar.css";
import logo from "../img/logo.svg";
import {
  FaFacebook,
  FaInstagramSquare,
  FaYoutube,
  FaShoppingBag,
} from "react-icons/fa";
import Navbar from "react-bootstrap/Navbar";
import Container from 'react-bootstrap/Container'
import Nav from "react-bootstrap/Nav";
import Row from 'react-bootstrap/Row'
import "bootstrap/dist/css/bootstrap.min.css";

function NavbarFunc() {
  return (
    <Navbar sticky="top" collapseOnSelect expand="sm" bg="light" variant="light">
      <Container>
      <Navbar.Brand href="./">
        <img className="logo" src={logo} alt=""></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="./">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/shop">Shop</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link
            className="facebook-icon"
            href="https://www.facebook.com/"
            target="_blank"
          >
            <FaFacebook />
          </Nav.Link>
          <Nav.Link
            className="instagram-icon"
            href="https://www.instagram.com/"
            target="_blank"
          >
            <FaInstagramSquare />
          </Nav.Link>
          <Nav.Link
            className="youtube-icon"
            href="https://www.facebook.com/"
            target="_blank"
          >
            <FaYoutube />
          </Nav.Link>
          <Nav.Link
            className="shopping-icon"
            href="https://www.facebook.com/"
            target="_blank"
          >
            <FaShoppingBag />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      
      </Container>
    </Navbar>
  );
}

export default NavbarFunc;
