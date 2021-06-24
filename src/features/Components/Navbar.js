import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../img/logo.jpg";
import {
  FaFacebook,
  FaInstagramSquare,
  FaYoutube,
  FaSearch,
  FaShoppingBag,
} from "react-icons/fa";

function Navbar() {
  return (
    <div className="NavbarWrapper">
      <div className="Navbar">
        <img className="logo" src={logo} alt=""></img>
        <NavLink
          className="headerLink"
          activeClassName="is-active"
          activeStyle={{ color: "hotpink" }}
          exact="true"
          to="/"
        >
          HOME
        </NavLink>
        <NavLink
          className="headerLink"
          activeClassName="is-active"
          activeStyle={{ color: "hotpink" }}
          to="/category"
        >
          CATEGORY
        </NavLink>
        <NavLink
          className="headerLink"
          activeClassName="is-active"
          activeStyle={{ color: "hotpink" }}
          to="/product"
        >
          PRODUCT
        </NavLink>
      </div>
      <div className="NavbarSocial">
        <Link className="icon facebook-icon">
          <FaFacebook />
        </Link>
        <Link className="icon facebook-icon">
          <FaInstagramSquare />
        </Link>
        <Link className="icon facebook-icon">
          <FaYoutube />
        </Link>
        <Link className="icon facebook-icon">
          <FaSearch />
        </Link>
        <Link className="icon facebook-icon">
          <FaShoppingBag />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
