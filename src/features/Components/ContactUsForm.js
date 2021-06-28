import React from "react";
import logo from "../img/logo.svg";

function FormPage() {
  return (
    <>
      <header className="form-description">
        <h1>here you can leave your feedback</h1>
      </header>
<div className="form-container">
      <div className="form-wrap">
        <div className="profile">
          <img className="form-logo" alt="logo" src={logo} />
          <h2>Stay in touch!</h2>
        </div>
        <form method="post" action="fakepage.js">
          <div>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="e.g. Jane Doe"
            />
          </div>
          <div>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              name="email"
              required
              placeholder="e.g. janedoe@domain.com"
            />
          </div>
          <textarea
            className="input-message"
            cols={30}
            rows={10}
            placeholder="Message....."
            defaultValue={""}
          />
          <button className="submit-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
    </>
  );
}

export default FormPage;
