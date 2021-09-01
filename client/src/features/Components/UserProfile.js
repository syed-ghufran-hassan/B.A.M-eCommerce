import React from "react";
import { useState } from "react";
import "../styles/UserProfile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { FaUserAlt, FaLock, FaAt } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import { Link, NavLink } from "react-router-dom";
import { updateUser,deleteUser } from "../../actions/usersAction.js";

function UserProfile() {
    const data = useSelector((state) => state.usersReducer.data);
    const dispatch = useDispatch();

    const onLogOut = () => {
        localStorage.clear();
        window.location.reload();
    };

    const onUpdateSubmit = (e) => {
        e.preventDefault();
        const { firstName, lastName, email, password } = e.target.elements;
        dispatch(
            updateUser({
                _id: data.user._id,
                firstName: firstName.value,
                lastName: lastName.value,
                email: email.value,
                password: password.value,
            }),
        );
    };

    const onDeleteUserClickHandler = () => {
        dispatch(deleteUser(data.user));
    }

    return (
        <div className="profile-container">
            <div className="part-one-container">
                <div className="profile-details">
                    <h1 text="dark">Welcome, {data.user.firstName}</h1>
                    <br />
                    <br />
                    <h4 className="text-center">
                        You are now part of us and we will always keep you up to
                        date with the latest fashion items!
                    </h4>
                    <Button className="profile-btn">
                        <NavLink className="home-shop" exact={true} to="/shop">
                            CHECK MORE
                        </NavLink>
                    </Button>
                    <Button className="profile-btn" onClick={onLogOut}>
                        <Link to="">SIGN OUT</Link>
                    </Button>
                </div>
                <div className="form-container">
                    <form action="#" onSubmit={onUpdateSubmit}>
                        <h2>Update my profile</h2>
                        <div className="input-field">
                            <FaUserAlt className="regis-icon" size={24} />
                            <input
                                type="text"
                                id="firstName"
                                placeholder="Update First Name"
                                required
                                defaultValue={data.user.firstName}
                            />
                        </div>
                        <div className="input-field">
                            <FaUserAlt className="regis-icon" size={24} />
                            <input
                                type="text"
                                id="lastName"
                                placeholder="Update Last Name"
                                required
                                defaultValue={data.user.lastName}
                            />
                        </div>
                        <div className="input-field">
                            <FaAt className="regis-icon" size={24} />
                            <input
                                type="email"
                                id="email"
                                placeholder="Update Email"
                                required
                                defaultValue={data.user.email}
                            />
                        </div>
                        <div className="input-field">
                            <FaLock className="regis-icon" size={24} />
                            <input
                                type="password"
                                id="password"
                                placeholder="Update Password"
                                required
                            />
                        </div>
                        <Button type="submit" className="profile-btn">
                                UPDATE
                        </Button>
                    </form>
                </div>
            </div>
            <div>
                <Button className="profile-btn delete-btn" onClick={onDeleteUserClickHandler}>
                    <Link to="">Delete my account</Link>
                </Button>
            </div>
        </div>
    );
}

export default UserProfile;
