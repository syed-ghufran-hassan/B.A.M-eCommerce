import React from "react";
import "../styles/HomePage.css";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../actions/ProductAction";
import hero from "../img/hero.jpg";
import hero1 from "../img/hero1.jpg";
import hero2 from "../img/hero2.jpg";
import hero3 from "../img/hero3.jpg";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="Carousel">
      <Carousel fade>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={hero} alt="First slide" />
          <Carousel.Caption>
            <h3>FASHION</h3>
            <h3>CHANGING</h3>
            <h3>ALWAYS</h3>
            <button>
            <NavLink
              className="home-shop"
              exact="true"
              to="/shop"
            >
              SHOP NOW
            </NavLink></button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={hero1} alt="Second slide" />
          <Carousel.Caption>
            <h3>FASHION</h3>
            <h3>CHANGING</h3>
            <h3>ALWAYS</h3>
            <Button>
            <NavLink
              className="home-shop"
              exact="true"
              to="/shop"
            >
              SHOP NOW
            </NavLink></Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={hero2} alt="Third slide" />
          <Carousel.Caption>
            <h3>FASHION</h3>
            <h3>CHANGING</h3>
            <h3>ALWAYS</h3>
            <Button>
            <NavLink
              className="home-shop"
              exact="true"
              to="/shop"
            >
              SHOP NOW
            </NavLink></Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={hero3} alt="Third slide" />
          <Carousel.Caption>
            <h3>FASHION</h3>
            <h3>CHANGING</h3>
            <h3>ALWAYS</h3>
            <Button>
            <NavLink
              className="home-shop"
              exact="true"
              to="/shop"
            >
              SHOP NOW
            </NavLink></Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default HomePage;
