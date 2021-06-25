import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../img/logo.svg";
import {
  FaFacebook,
  FaInstagramSquare,
  FaYoutube,
  FaShoppingBag,
} from "react-icons/fa";

function Navbar() {
  return (
    <div className="NavbarWrapper">
      <div className="Navbar">
        <NavLink
          className="headerLink"
          activeClassName="is-active"
          activeStyle={{ color: "hotpink" }}
          exact
          to="/"
        >
          <img className="logo" src={logo} alt=""></img>
        </NavLink>
        <NavLink
          className="headerLink"
          activeClassName="is-active"
          activeStyle={{ color: "hotpink" }}
          exact
          to="/"
        >
          HOME
        </NavLink>
        <NavLink
          className="headerLink"
          activeClassName="is-active"
          activeStyle={{ color: "hotpink" }}
          exact
          to="/about"
        >
          ABOUT
        </NavLink>
        <NavLink
          className="headerLink"
          activeClassName="is-active"
          activeStyle={{ color: "hotpink" }}
          exact
          to="/shop"
        >
          SHOP
        </NavLink>
        <NavLink
          className="headerLink"
          activeClassName="is-active"
          activeStyle={{ color: "hotpink" }}
          exact
          to="/contact"
        >
          CONTACT
        </NavLink>
      </div>
      <div className="NavbarSocial">
        <Link
          to={{ pathname: "https://www.facebook.com/" }}
          target="_blank"
          className="icon facebook-icon"
        >
          <FaFacebook />
        </Link>
        <Link
          to={{ pathname: "https://www.instagram.com/" }}
          target="_blank"
          className="icon instagram-icon"
        >
          <FaInstagramSquare />
        </Link>
        <Link
          to={{ pathname: "https://www.youtube.com/" }}
          target="_blank"
          className="icon youtube-icon"
        >
          <FaYoutube />
        </Link>
        <Link
          to={{ pathname: "https://www.youtube.com/" }}
          target="_blank"
          className="icon shopping-icon"
        >
          <FaShoppingBag />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
