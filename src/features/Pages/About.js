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
          <p className="Description-About"><span style={{ color: "#623BC1", fontSize: "20px", fontWeight: "bolder"}}>BAM CAT</span> is a company created by three web developers who like cats and clothes. We wanted to produce top-fashion and high-quality clothing to sell as a hobby in an online store that we developed. We enjoyed the experience of making this ecommerce website as it was so entertaining. We hope you find products you like in each click.</p>
          <img style={{ width: "150px" }} src={logo}></img>
        </div>
        <div className="Image-Container" >
          <img className="About-Image" src={fashionstore}></img>
        </div>
      </div>
    </div>
  )
}

