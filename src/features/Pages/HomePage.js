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
import Card from "react-bootstrap/Card";
import CardDeck from 'react-bootstrap/CardDeck'

function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="Page-container">
      <div className="Carousel">
        <Carousel fade>
          <Carousel.Item interval={3000}>
            <img className="d-block w-100" src={hero} alt="First slide" />
            <Carousel.Caption>
              <h1>FASHION</h1>
              <h1>CHANGING</h1>
              <h1>ALWAYS</h1>
              <button>
                <NavLink className="home-shop" exact="true" to="/shop">
                  SHOP NOW
                </NavLink>
              </button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img className="d-block w-100" src={hero1} alt="Second slide" />
            <Carousel.Caption>
              <h1>FASHION</h1>
              <h1>CHANGING</h1>
              <h1>ALWAYS</h1>
              <Button>
                <NavLink className="home-shop" exact="true" to="/shop">
                  SHOP NOW
                </NavLink>
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img className="d-block w-100" src={hero2} alt="Third slide" />
            <Carousel.Caption>
              <h1>FASHION</h1>
              <h1>CHANGING</h1>
              <h1>ALWAYS</h1>
              <Button>
                <NavLink className="home-shop" exact="true" to="/shop">
                  SHOP NOW
                </NavLink>
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img className="d-block w-100" src={hero3} alt="Third slide" />
            <Carousel.Caption>
              <h1>FASHION</h1>
              <h1>CHANGING</h1>
              <h1>ALWAYS</h1>
              <Button>
                <NavLink className="home-shop" exact="true" to="/shop">
                  SHOP NOW
                </NavLink>
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="Best-container">
        <div className="Men-title"></div>
        <div className="Best-men-clothing">
          <CardDeck>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </div>
        <div className="Women-title"></div>
        <div className="Best-women-clothing"></div>
        <div className="General-title"></div>
        <div className="General-info"></div>
      </div>
    </div>
  );
}

export default HomePage;
