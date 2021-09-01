import React, { useState } from "react";
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux";
import { FaUserAlt, FaLock, FaAt } from "react-icons/fa";
import { registerUser , loginUser} from "../../actions/usersAction.js"
import Alert from 'react-bootstrap/Alert'

function RegistrationForm({ currentId, setCurrentId}) {
  const [mode, updateMode] = useState("");
  const dispatch = useDispatch();

  // Here we got two variables, one for loading and another for errors using useSelector from react-redux
  const loading = useSelector((state) => state.usersReducer.loading);
  const hasErrors = useSelector((state) => state.usersReducer.hasErrors);

  const onSubmitSignIn = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements
    dispatch(loginUser({
      email: email.value,
      password: password.value
    }));      
  };

  const onSubmitSignUp = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password } = e.target.elements
    dispatch(registerUser({
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      password: password.value
    }));
  };

  const handleOnSignUpClick = () => {
    updateMode("sign-up-mode");
  };

  const handleOnSignInClick = () => {
    updateMode("");
  };

  return (
    <div>
      <div className="Title-Container">
        <h1 className="Title-Contact">Registration</h1> 
      </div>
      <div className="login-form-container">
        <div className={`container-login ${mode}`}>
          <div className="forms-container">
            <div className="signin-signup">
              <form action="#" className="sign-in-form" onSubmit={onSubmitSignIn}>
                <Alert variant="danger" show={hasErrors}>
                  <Alert.Heading>Login error</Alert.Heading>
                  <p>
                    Wrong username or password
                  </p>
                </Alert>
                <h2 className="title-reg">Sign in</h2>
                <div className="input-field">
                  <FaAt className="regis-icon" size={24} />
                  <input type="email" id="email" placeholder="Email" required />
                </div>
                <div className="input-field">
                  <FaLock className="regis-icon" size={24} />

                  <input type="password" id="password" placeholder="Password" required />
                </div>
                <input
                  type="submit"
                  defaultValue="Login"
                  className="submit-btn"
                  disabled={loading ? true : false}
                />
              </form>

              <form action="#" className="sign-up-form" onSubmit={onSubmitSignUp}>
                <h2 className="title-reg">Sign up</h2>
                <div className="input-field">
                  <FaUserAlt className="regis-icon" size={24} />
                  <input type="text" id="firstName" placeholder="First Name" required />
                </div>
                <div className="input-field">
                  <FaUserAlt className="regis-icon" size={24} />
                  <input type="text" id="lastName" placeholder="Last Name" required />
                </div>
                <div className="input-field">
                  <FaAt className="regis-icon" size={24} />
                  <input type="email" id="email" placeholder="Email" required/>
                </div>
                <div className="input-field">
                  <FaLock className="regis-icon" size={24} />
                  <input type="password" id="password" placeholder="Password" required />
                </div>
                {/* <div className="input-field">
                  <FaUnlockAlt className="regis-icon" size={24} />
                  <input
                    type="password"
                    placeholder="Confirm the Password"
                    required
                  />
                </div> */}
                <input
                  type="submit"
                  className="submit-btn"
                  defaultValue="Sign up"
                  disabled={loading ? true : false}
                />
              </form>
            </div>
          </div>
          <div className="panels-container">
            <div className="panel left-panel">
              <div className="content">
                <h3>New here ?</h3>
                <p>Became a part of our BAM Cat Community!</p>
                <button
                  className="submit-btn transparent"
                  id="sign-up-btn"
                  onClick={handleOnSignUpClick}
                >
                  Sign up
                </button>
              </div>
              <div></div>
            </div>
            <div className="panel right-panel">
              <div className="content">
                <h3>One of us ?</h3>
                <p>Sign in BAM Cat Community.</p>
                <button
                  className="submit-btn transparent"
                  id="sign-in-btn"
                  onClick={handleOnSignInClick}
                >
                  Sign in
                </button>
              </div>
              <div className="gradient"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
