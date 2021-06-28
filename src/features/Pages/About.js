import React from 'react';
import '../styles/About.css';
import logo from "../img/logo.svg";
import fashionstore from "../img/fashionstore.jpg";

export default function About() {
  return (
    <div className="Container">
      <div className="Title-Container">
        <h1 className="Title-About">ABOUT BAM CAT STORE</h1>
      </div>
      <div className="About-Container">
        <div className="Description-Container">
          <p className="Description-About"><strong>BAM Cat</strong> is a company created by three Web Developers who like cats and clothes. We wanted to produce high-quality clothing and sell it as a hobby. Developing this e-commerce website was an entertaining experience that I hope you enjoy with every click.</p>
          <img style={{ width: "150px" }} src={logo}></img>
        </div>
        <div className="Image-Container">
          <img style={{ width: "600px" }} src={fashionstore}></img>
        </div>
      </div>
    </div>
  )
}

