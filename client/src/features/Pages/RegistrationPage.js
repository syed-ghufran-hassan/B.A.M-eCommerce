import React from "react";
import { useSelector } from "react-redux";
import RegistrationForm from "../Components/RegistrationForm";
import ScrollButton from "../Components/ScrollButton";

import "../styles/RegistrationForm.css";
import Carousel from "react-bootstrap/Carousel";
import welcome from "../img/welcome.png";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

export default function RegistrationPage() {
    const data = useSelector((state) => state.usersReducer.data);

    const renderRegisterFormOrWelcome = () => {
        // state loggedIn
        if (data.token && data.user._id) {
          return (
          <div>   
          <ScrollButton />
          <div className="Carousel">
            <img className="Carousel-Image" src={welcome} alt="First slide" />
            <Carousel.Caption>
                  <h1 text="dark">
                    Welcome, {data.user.firstName}
                  </h1>
                  <br/><br/>
                  <h4>
                    You are now part of us and we will always keep you up to date with the latest fashion items!
                  </h4>
              <Button className="main-btn">
                <NavLink className="home-shop" exact={true} to="/shop">
                  CHECK MORE
                </NavLink>
              </Button>
            </Carousel.Caption>
       
          </div> 
          </div>
          );
        }
        return <RegistrationForm />;
    };

    return (
        <div>
            <ScrollButton />
            {renderRegisterFormOrWelcome()}
        </div>
    );
}