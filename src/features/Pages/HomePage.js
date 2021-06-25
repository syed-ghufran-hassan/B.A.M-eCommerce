import React from "react";
import "../styles/HomePage.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../actions/ProductAction";
import { HeroCarousel } from "react-hero-carousel";
import hero from "../img/hero.jpg"
import hero1 from "../img/hero1.jpg"
import hero2 from "../img/hero2.jpg"
import hero3 from "../img/hero3.jpg"
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';

function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="Carousel">
  <Carousel>
  <Carousel.Item interval={5000}>
    <img
      className="d-block w-100"
      src={hero}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={5000}>
    <img
      className="d-block w-100"
      src={hero1}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={5000}>
    <img
      className="d-block w-100"
      src={hero2}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={5000}>
    <img
      className="d-block w-100"
      src={hero3}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
       {/* <HeroCarousel>
    <img
      src={hero}
      alt=""
    />
    <img
      src={hero1}
      alt=""
    />
    <img
      src={hero2}
      alt=""
    />
    <img
      src={hero3}
      alt=""
    />
  </HeroCarousel> */}
    </div>
  );
}

export default HomePage;
