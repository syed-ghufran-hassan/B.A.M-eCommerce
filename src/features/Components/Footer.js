import React from "react";
import "../styles/Footer.css";
import logo from "../img/logoW.png";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagramSquare,
  FaYoutube
} from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="Footer-background">
      <div className="Footer">
      <div className="Links-wrapper">
        <div className="Logo-part">
          <img src={logo} alt=""></img>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perferendis, dignissimos cum!
          </p>
          <div className="Footer-icons">
          <Link className="icon facebook-icon">
          <FaFacebook />
        </Link>
        <Link className="icon instagram-icon">
          <FaInstagramSquare />
        </Link>
        <Link className="icon youtube-icon">
          <FaYoutube />
        </Link>
          </div>
        </div>
        <div className="Quick-links">
          <h4>Quick Links</h4>
          <Link>Image Licensin</Link>
          <Link>Style Guide</Link>
          <Link>Privacy Policy</Link>
        </div>
        <div className="Partners-links">
          <h4>Partners Links</h4>
          <Link>Zalando</Link>
          <Link>Amazon</Link>
          <Link>E-bay</Link>
        </div>
        <div className="Contact-info">
        <h4>Get in touch</h4>
          <span>(09) 533 7732 20</span>
          <span>bam-cat@startup.com</span>
          <span>16/C Fugger Strasse, Potsdam, Germany</span>
        </div>
      </div>
      <div className="Credentials">
        <span> BAM E-Commerce | Copyright &copy; {year} </span>
      </div>
      </div>
    </footer>
  );
}

export default Footer;
