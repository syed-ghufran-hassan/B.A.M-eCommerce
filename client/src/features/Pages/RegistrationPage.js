import React from "react";
import { useSelector } from "react-redux";
import RegistrationForm from "../Components/RegistrationForm";
import ScrollButton from "../Components/ScrollButton";

import "../styles/RegistrationForm.css";

export default function RegistrationPage() {
    const data = useSelector((state) => state.usersReducer.data);

    const renderRegisterFormOrWelcome = () => {
        // state loggedIn
        if (data.token && data.user._id) {
          return (<div>welcome {data.user.firstName}</div>);
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