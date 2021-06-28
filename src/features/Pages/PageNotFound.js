import React from 'react'
import "../styles/PageNotFound.css";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="Container">
        <div className="Title-PageNotFound">404 Page Not Found</div>
        <p>
          You can got back to the main page by clicking in the button. Thanks!
        </p>
        <Link to={{ pathname: "/" }}>
          <button className="NotFoundButton">Back to Home</button>
        </Link>
    </div>
  )
}

export default PageNotFound;
